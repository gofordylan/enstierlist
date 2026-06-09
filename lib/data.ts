export type CriterionKey = "forward" | "reverse" | "avatar" | "offchain";

/** A scored project — either a wallet or a dApp. */
export type Project = {
  slug: string;
  name: string;
  domain: string;
  /** Public source repo, if the project is open source. */
  github?: string;
  logo: string;
  /** Clip the logo to a circle (for square-art logos like Snapshot). */
  round?: boolean;
  scores: Record<CriterionKey, boolean>;
  /** Research citations (not rendered, kept for traceability). */
  sources?: string[];
};

export const CRITERIA: { key: CriterionKey; label: string }[] = [
  { key: "forward", label: "Forward Resolution" },
  { key: "reverse", label: "Reverse Resolution" },
  { key: "avatar", label: "Avatar" },
  { key: "offchain", label: "CCIP-Read names" },
];

export type Tier = "S" | "A" | "B" | "C" | "F";

export const TIERS: { key: Tier; color: string; label: string }[] = [
  { key: "S", color: "var(--color-tier-s)", label: "Native" },
  { key: "A", color: "var(--color-tier-a)", label: "Strong" },
  { key: "B", color: "var(--color-tier-b)", label: "Solid" },
  { key: "C", color: "var(--color-tier-c)", label: "Basic" },
  { key: "F", color: "var(--color-tier-f)", label: "Missing" },
];

export function scoreOf(p: Project): number {
  return Object.values(p.scores).filter(Boolean).length;
}

export function tierOf(p: Project): Tier {
  const s = scoreOf(p);
  if (s === 4) return "S";
  if (s === 3) return "A";
  if (s === 2) return "B";
  if (s === 1) return "C";
  return "F";
}

export function byTier(projects: Project[]): Record<Tier, Project[]> {
  const buckets: Record<Tier, Project[]> = { S: [], A: [], B: [], C: [], F: [] };
  for (const p of projects) buckets[tierOf(p)].push(p);
  return buckets;
}
