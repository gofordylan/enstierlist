import type { Project } from "./data";

// dApp ENS-integration scores from public docs and shipped UI as of June 2026.
// Same strict binary as wallets: partial/undocumented support counts as false.
export const dapps: Project[] = [
  {
    slug: "ens-app",
    name: "ENS App",
    domain: "app.ens.domains",
    github: "https://github.com/ensdomains/ens-app-v3",
    logo: "/logos/ens.jpg",
    scores: { forward: true, reverse: true, avatar: true, offchain: true },
    sources: [
      "https://ens.domains/",
      "https://docs.ens.domains/learn/ccip-read/",
    ],
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
    slug: "snapshot",
    name: "Snapshot",
    domain: "snapshot.box",
    github: "https://github.com/snapshot-labs/snapshot",
    logo: "/logos/snapshot.png",
    scores: { forward: true, reverse: true, avatar: true, offchain: false },
    sources: [
      "https://docs.snapshot.box/user-guides/spaces/create/ens-domain",
      "https://snapshot.box/",
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
    sources: [
      "https://info.etherscan.com/ens-name-tags-on-etherscan/",
    ],
  },
  {
    slug: "safe",
    name: "Safe",
    domain: "app.safe.global",
    github: "https://github.com/safe-global/safe-wallet-monorepo",
    logo: "/logos/safe.jpg",
    scores: { forward: true, reverse: false, avatar: false, offchain: false },
    sources: [
      "https://help.safe.global/en/articles/40820-send-funds",
      "https://beta.walletbeat.eth.limo/safe/",
    ],
  },
];
