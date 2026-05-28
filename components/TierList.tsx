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
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="bg-surface border border-[var(--color-faint)] rounded-[14px] sm:rounded-[18px] overflow-hidden">
        {TIERS.map((tier, i) => (
          <div
            key={tier.key}
            className={`flex items-stretch ${i < TIERS.length - 1 ? "border-b border-[rgba(242,241,236,0.06)]" : ""}`}
          >
            <div
              className="w-[64px] sm:w-[120px] md:w-[172px] shrink-0 flex items-center justify-center"
              style={{ background: TIER_BG[tier.key] }}
            >
              <div className="font-mono text-[42px] sm:text-[80px] md:text-[108px] font-extrabold tracking-[-0.04em] leading-none text-[#1A1B1F]">
                {tier.key}
              </div>
            </div>
            <div className="flex-1 flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 min-h-[88px] sm:min-h-[140px] md:min-h-[172px]">
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

      <ExpandedCard wallet={selected} />
    </div>
  );
}
