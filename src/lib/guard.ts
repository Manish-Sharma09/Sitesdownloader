// Keeps one visitor from tying up the server: at most a few downloads at a time per address.
// In memory, per server process; enough for a single Node server, and nothing is stored.
const MAX_PER_CLIENT = 2;
const active = new Map<string, number>();

/** Runs `job` if the client has a free slot; returns undefined when it is already at the limit. */
export async function withSlot<T>(client: string, job: () => Promise<T>): Promise<T | undefined> {
  const count = active.get(client) ?? 0;
  if (count >= MAX_PER_CLIENT) return undefined;
  active.set(client, count + 1);
  try {
    return await job();
  } finally {
    const left = (active.get(client) ?? 1) - 1;
    if (left > 0) active.set(client, left);
    else active.delete(client);
  }
}
