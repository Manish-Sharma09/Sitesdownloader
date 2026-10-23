// The archive manifest: a machine-readable record of one download, written into every archive as
// archive-manifest.json next to a readable archive-report.html. The browser reads it back out of
// the ZIP to show the result panel (files, problems, insights) without asking the server again.
// Types and constants only, so the browser bundle can import it.
import type { RemovedItem } from './cleaner';
import type { Insights } from './insights';
import type { AssetKind } from './paths';

export const MANIFEST_FILE = 'archive-manifest.json';
export const REPORT_FILE = 'archive-report.html';
export const MAX_PAGES = 20;

export type Device = 'desktop' | 'mobile';
export type DeviceChoice = Device | 'both';
export type OutputFormat = 'zip' | 'single';

export interface ArchiveOptions {
  renameAssets: boolean;
  keepStructure: boolean;
  simplified: boolean;
  cleanCopy: boolean;
  prettify: boolean;
  device: DeviceChoice;
  output: OutputFormat;
}

/** Why a file isn't inside the archive. Each has a translated explanation in result.reasons. */
export type FailReason =
  | 'http'
  | 'timeout'
  | 'tooLarge'
  | 'notAsset'
  | 'blocked'
  | 'network'
  | 'deadline'
  | 'archiveFull'
  | 'limit';

export type FileKind = AssetKind | 'html';

export interface ManifestFile {
  /** Path inside the archive. */
  path: string;
  /** Where it came from. */
  url: string;
  kind: FileKind;
  bytes: number;
  variant: Device;
}

export interface ManifestProblem {
  url: string;
  kind: FileKind;
  reason: FailReason;
  /** HTTP status for reason "http". */
  status?: number;
  variant: Device;
}

export interface ManifestPage {
  url: string;
  path: string;
  title: string;
  variant: Device;
}

export interface Manifest {
  version: 1;
  /** Address of the first page, after redirects. */
  url: string;
  host: string;
  capturedAt: string;
  options: ArchiveOptions;
  variants: Device[];
  /** Name for the download: example.com.zip, or example.com.html for one page saved as a single file. */
  filename: string;
  /** Set when the download is one file taken out of the archive (one page, single HTML file). */
  singleFile?: string;
  pages: ManifestPage[];
  files: ManifestFile[];
  problems: ManifestProblem[];
  /** Total problems, when the list above was shortened. */
  problemCount: number;
  removed: RemovedItem[];
  /** Links to pages that aren't in the archive; they still open the live site. */
  liveLinks: number;
  /** Share of the page's files saved inside the archive, 0–100. */
  score: number;
  insights: Insights;
  limits: { assetBytes: number; maxAssets: number };
  /** Files left out in the browser with "Download selected"; references to them point at `url`. */
  excluded?: { path: string; url: string }[];
}
