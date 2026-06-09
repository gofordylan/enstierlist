import type { Project } from "./data";

// App ENS-integration scores from public docs and shipped UI as of June 2026.
// Same strict binary as wallets: partial/undocumented support counts as false.
export const apps: Project[] = [
  {
    slug: "efp",
    name: "Ethereum Follow Protocol",
    domain: "efp.app",
    github: "https://github.com/ethereumfollowprotocol/app",
    logo: "/logos/efp.png",
    round: true,
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: ["https://efp.app/", "https://docs.ethfollow.xyz/"],
  },
  {
    slug: "uniswap-app",
    name: "Uniswap",
    domain: "app.uniswap.org",
    github: "https://github.com/Uniswap/interface",
    logo: "/logos/uniswap.png",
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: [
      "https://ens.domains/ecosystem/uniswap",
      "https://blog.uniswap.org/introducing-uni-eth-your-unique-web3-username",
    ],
  },
  {
    slug: "wannabet",
    name: "WannaBet",
    domain: "app.heywannabet.com",
    github: "https://github.com/gofordylan/wannabet-v2",
    logo: "/logos/wannabet.webp",
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: ["https://app.heywannabet.com/", "https://heywannabet.com/"],
  },
  {
    slug: "snapshot",
    name: "Snapshot",
    domain: "snapshot.box",
    github: "https://github.com/snapshot-labs/snapshot",
    logo: "/logos/snapshot.png",
    round: true,
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: [
      "https://docs.snapshot.box/user-guides/spaces/create/ens-domain",
      "https://snapshot.box/",
    ],
  },
  {
    slug: "farcaster",
    name: "Farcaster",
    domain: "farcaster.xyz",
    github: "https://github.com/farcasterxyz/protocol",
    logo: "/logos/farcaster.png",
    round: true,
    scores: { forward: true, reverse: false, avatar: false, offchain: false },
    sources: [
      "https://github.com/farcasterxyz/protocol/discussions/90",
      "https://docs.farcaster.xyz/learn/what-is-farcaster/usernames",
    ],
  },
  {
    slug: "opensea",
    name: "OpenSea",
    domain: "opensea.io",
    logo: "/logos/opensea.png",
    scores: { forward: true, reverse: true, avatar: false, offchain: false },
    sources: [
      "https://support.opensea.io/en/articles/11851882-how-can-i-display-my-ens-name-on-my-opensea-profile",
    ],
  },
  {
    slug: "etherscan",
    name: "Etherscan",
    domain: "etherscan.io",
    logo: "/logos/etherscan.png",
    scores: { forward: true, reverse: true, avatar: false, offchain: false },
    sources: ["https://info.etherscan.com/ens-name-tags-on-etherscan/"],
  },
  {
    slug: "aave",
    name: "Aave",
    domain: "app.aave.com",
    github: "https://github.com/aave/interface",
    logo: "/logos/aave.png",
    scores: { forward: true, reverse: true, avatar: true, offchain: false },
    sources: [
      "https://github.com/aave/aave-ui/issues/48",
      "https://github.com/aave/aave-ui/issues/144",
    ],
  },
  {
    slug: "safe",
    name: "Safe",
    domain: "app.safe.global",
    github: "https://github.com/safe-global/safe-wallet-monorepo",
    logo: "/logos/safe.png",
    scores: { forward: true, reverse: false, avatar: false, offchain: false },
    sources: [
      "https://help.safe.global/en/articles/40820-send-funds",
      "https://beta.walletbeat.eth.limo/safe/",
    ],
  },
  {
    slug: "hyperliquid",
    name: "Hyperliquid",
    domain: "app.hyperliquid.xyz",
    logo: "/logos/hyperliquid.png",
    // Uses its own .hl naming system (Hyperliquid Names), not ENS .eth.
    scores: { forward: false, reverse: false, avatar: false, offchain: false },
    sources: [
      "https://app.hyperliquid.xyz/",
      "https://hyperliquid-names.gitbook.io/hyperliquid-names/",
    ],
  },
];
