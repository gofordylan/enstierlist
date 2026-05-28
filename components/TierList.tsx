"use client";

import { useState } from "react";
import { wallets, walletsByTier, TIERS, type Wallet } from "@/lib/wallets";
import WalletTile from "./WalletTile";
import ExpandedCard from "./ExpandedCard";

const TIER_BG: Record<string, string> = {
  S: "var(--color-tier-s)",
  A: "var(--color-tier-a)",
  B: "var(--color-tier-b)",
  C: "var(--color-tier-c)",
  F: "var(--color-tier-f)",
};

export default function TierList() {
  const buckets = walletsByTier();
  const [selectedSlug, setSelectedSlug] = useState<string>("rainbow");
  const selected = wallets.find((w) => w.slug === selectedSlug) ?? wallets[0];

  return (
    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-6 md:items-start">
      <div className="flex-1 min-w-0 bg-surface border border-[var(--color-faint)] rounded-[14px] sm:rounded-[18px] overflow-hidden">
        {TIERS.map((tier, i) => (
          <div
            key={tier.key}
            className={`flex items-stretch ${i < TIERS.length - 1 ? "border-b border-[rgba(242,241,236,0.06)]" : ""}`}
          >
            <div
              className="w-[56px] sm:w-[96px] md:w-[120px] shrink-0 flex items-center justify-center"
              style={{ background: TIER_BG[tier.key] }}
            >
              <div className="font-mono text-[34px] sm:text-[60px] md:text-[76px] font-extrabold tracking-[-0.04em] leading-none text-[#1A1B1F]">
                {tier.key}
              </div>
            </div>
            <div className="flex-1 flex flex-wrap items-center gap-2 sm:gap-3 p-2 sm:p-2.5 md:p-3 min-h-[72px] sm:min-h-[112px] md:min-h-[128px]">
              {buckets[tier.key].map((wallet) => (
                <WalletTile
                  key={wallet.slug}
                  wallet={wallet}
                  onClick={() => setSelectedSlug(wallet.slug)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <aside className="w-full md:w-[340px] md:shrink-0 md:sticky md:top-6">
        <ExpandedCard wallet={selected} />
      </aside>
    </div>
  );
}
