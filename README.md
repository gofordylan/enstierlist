# enstierlist.com

A tier list of crypto wallets, scored on 4 binary ENS-integration criteria.

## Criteria

Each wallet gets a ✓ or ✗ on:

- **Forward Resolution** — `vitalik.eth` resolves to the right address in the send flow.
- **Reverse Resolution** — the wallet displays the primary `.eth` name instead of the raw `0x…` address.
- **Avatar** — the wallet renders the ENS avatar record as the profile picture.
- **Offchain Names** — names that use ENSIP-10 + EIP-3668 CCIP-Read resolve correctly (e.g. `cb.id`, `name.uni.eth`).

Tier from total score: 4=S, 3=A, 2=B, 1=C, 0=F.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4
- Logos served from `/public/logos/` as static assets

## Contribute

Spot a mistake or a missing wallet? Open a pull request.

Each wallet's scores live in `lib/wallets.ts`. Update the `scores` object and the tier list reshuffles automatically.
