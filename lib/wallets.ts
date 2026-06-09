import type { Project } from "./data";

// Scores from public docs, changelogs, and shipped UI as of May 2026.
// Strict binary: partial/undocumented support counts as false.
export const wallets: Project[] = [
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
