"use client";

import { useState } from "react";
import { wallets } from "@/lib/wallets";
import { dapps } from "@/lib/dapps";
import TierList from "./TierList";

const TABS = [
  { key: "wallets", label: "Wallets", items: wallets },
  { key: "dapps", label: "dApps", items: dapps },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function Explorer() {
  const [active, setActive] = useState<TabKey>("wallets");
  const current = TABS.find((t) => t.key === active) ?? TABS[0];

  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-9">
      <div
        role="tablist"
        aria-label="Categories"
        className="inline-flex self-start items-center gap-1 p-1 rounded-[12px] bg-surface border border-[var(--color-faint)]"
      >
        {TABS.map((t) => {
          const selected = t.key === active;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(t.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-[9px] text-[13px] sm:text-[14px] font-semibold tracking-tight transition-colors ${
                selected
                  ? "bg-paper text-[#1A1B1F]"
                  : "text-[var(--color-mute)] hover:text-paper hover:bg-[rgba(242,241,236,0.05)]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <TierList key={active} items={current.items} />
    </div>
  );
}
