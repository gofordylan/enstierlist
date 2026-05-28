export type CriterionKey = "forward" | "reverse" | "avatar" | "offchain";

export type Wallet = {
  slug: string;
  name: string;
  domain: string;
  /** Public source repo, if the wallet is open source. */
  github?: string;
  logo: string;
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

export function scoreOf(w: Wallet): number {
  return Object.values(w.scores).filter(Boolean).length;
}

export function tierOf(w: Wallet): Tier {
  const s = scoreOf(w);
  if (s === 4) return "S";
  if (s === 3) return "A";
  if (s === 2) return "B";
  if (s === 1) return "C";
  return "F";
}

// Scores from public docs, changelogs, and shipped UI as of May 2026.
// Strict binary: partial/undocumented support counts as false.
export const wallets: Wallet[] = [
  {
    slug: "rainbow",
    name: "Rainbow",
    domain: "rainbow.me",
    github: "https://github.com/rainbow-me/rainbow",
    logo: "/logos/rainbow.png",
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: [
      "https://www.mintlify.com/rainbow-me/rainbow/features/ens/overview",
      "https://rainbow.me/support/app/customize-your-ens-profile",
    ],
  },
  {
    slug: "uniswap",
    name: "Uniswap Wallet",
    domain: "wallet.uniswap.org",
    github: "https://github.com/Uniswap/universe",
    logo: "/logos/uniswap.png",
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: [
      "https://ens.domains/ecosystem/uniswap",
      "https://blog.uniswap.org/introducing-uni-eth-your-unique-web3-username",
    ],
  },
  {
    slug: "coinbase",
    name: "Coinbase Wallet",
    domain: "wallet.coinbase.com",
    logo: "/logos/coinbase.png",
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: [
      "https://ens.domains/blog/post/coinbase-strategic-integration-of-ens",
      "https://help.coinbase.com/en/wallet/managing-account/coinbase-ens-support",
    ],
  },
  {
    slug: "walletchan",
    name: "WalletChan",
    domain: "walletchan.com",
    github: "https://github.com/apoorvlathey/walletchan",
    logo: "/logos/walletchan.png",
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: [
      "https://walletchan.com",
      "https://github.com/apoorvlathey/walletchan",
    ],
  },
  {
    slug: "ambire",
    name: "Ambire Wallet",
    domain: "ambire.com",
    github: "https://github.com/AmbireTech/wallet",
    logo: "/logos/ambire.png",
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: [
      "https://www.ambire.com/",
      "https://help.ambire.com/en",
    ],
  },
  {
    slug: "zerion",
    name: "Zerion",
    domain: "zerion.io",
    logo: "/logos/zerion.png",
    scores: { forward: true, reverse: true, avatar: false, offchain: false },
    sources: [
      "https://zerion.io/ethereum-wallet",
      "https://zerion.io/blog/multichain-transaction-history-in-one-feed/",
    ],
  },
  {
    slug: "metamask",
    name: "MetaMask",
    domain: "metamask.io",
    github: "https://github.com/MetaMask/metamask-extension",
    logo: "/logos/metamask.png",
    scores: { forward: true, reverse: false, avatar: false, offchain: true },
    sources: [
      "https://github.com/MetaMask/metamask-extension/pull/7177",
      "https://support.metamask.io/managing-my-wallet/sending-or-receiving-a-transaction-with-ens/",
      "https://github.com/MetaMask/specifications/issues/9",
    ],
  },
  {
    slug: "phantom",
    name: "Phantom",
    domain: "phantom.app",
    logo: "/logos/phantom.png",
    scores: { forward: true, reverse: false, avatar: false, offchain: false },
    sources: [
      "https://help.phantom.com/hc/en-us/articles/34164163152147-Get-started-with-Base-in-Phantom",
      "https://help.phantom.com/hc/en-us/articles/5530158379539-How-to-send-crypto-from-Phantom",
    ],
  },
  {
    slug: "ledger",
    name: "Ledger Live",
    domain: "ledger.com",
    github: "https://github.com/LedgerHQ/ledger-live",
    logo: "/logos/ledger.png",
    scores: { forward: true, reverse: false, avatar: false, offchain: false },
    sources: [
      "https://www.ledger.com/blog/ledger-now-supports-ens-domain-adresses",
      "https://support.ledger.com/article/9710787581469-zd",
    ],
  },
  {
    slug: "rabby",
    name: "Rabby",
    domain: "rabby.io",
    github: "https://github.com/RabbyHub/Rabby",
    logo: "/logos/rabby.png",
    scores: { forward: true, reverse: false, avatar: false, offchain: true },
    sources: ["https://beta.walletbeat.eth.limo/rabby/", "https://rabby.io/"],
  },
  {
    slug: "frame",
    name: "Frame",
    domain: "frame.sh",
    github: "https://github.com/floating/frame",
    logo: "/logos/frame.png",
    scores: { forward: true, reverse: true, avatar: false, offchain: false },
    sources: ["https://github.com/floating/frame", "https://docs.frame.sh/"],
  },
];

export function walletsByTier(): Record<Tier, Wallet[]> {
  const buckets: Record<Tier, Wallet[]> = { S: [], A: [], B: [], C: [], F: [] };
  for (const w of wallets) buckets[tierOf(w)].push(w);
  return buckets;
}
