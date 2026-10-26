// How fetcher.ts sends one request on Node. The Workers build uses transport.workers.ts instead
// (package.json "imports", "workerd" condition); both export the same fetchHop.
import { lookup as dnsLookup, type LookupAddress } from 'node:dns';
import { Agent, fetch } from 'undici';
import { isBlockedAddress } from './addresses';

// DNS lookup used for every outgoing connection, so a hostname that resolves to a private address is
// rejected at connect time (including after redirects), and the address checked is the one connected to.
const guardedLookup = ((hostname: string, options: object, callback: (...args: unknown[]) => void) => {
  dnsLookup(hostname, { ...options, all: true }, (err, addresses: LookupAddress[]) => {
    if (err) return callback(err);
    const publicAddresses = addresses.filter((a) => !isBlockedAddress(a.address));
    if (publicAddresses.length === 0) {
      return callback(Object.assign(new Error(`${hostname} resolves to a private address`), { code: 'EPRIVATE' }));
    }
    if ((options as { all?: boolean }).all) return callback(null, publicAddresses);
    callback(null, publicAddresses[0].address, publicAddresses[0].family);
  });
}) as never;

const agent = new Agent({
  connect: { lookup: guardedLookup, timeout: 10_000 },
  headersTimeout: 15_000,
  bodyTimeout: 20_000,
});

/** One request, redirects not followed. */
export function fetchHop(url: URL, init: { signal: AbortSignal; headers: Record<string, string> }): Promise<Response> {
  // undici's Response has the same API as the global one; only the TypeScript types differ.
  return fetch(url, { ...init, redirect: 'manual', dispatcher: agent }) as unknown as Promise<Response>;
}
