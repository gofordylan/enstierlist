"use client";

import { useState } from "react";
import { wallets } from "@/lib/wallets";
import { apps } from "@/lib/apps";
import TierList from "./TierList";
import HowItWorks from "./HowItWorks";

const TABS = [
  { key: "wallets", label: "Wallets", items: wallets },
  { key: "apps", label: "Apps", items: apps },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function Explorer() {
  const [active, setActive] = useState<TabKey>("wallets");
  const [helpOpen, setHelpOpen] = useState(false);
  const current = TABS.find((t) => t.key === active) ?? TABS[0];

  return (
    <>
      <header className="flex items-start justify-between gap-4 sm:gap-6">
        <div className="flex flex-col gap-2 sm:gap-3 min-w-0">
          <h1 className="text-[clamp(26px,5vw,42px)] font-bold leading-[1.02] tracking-[-0.025em] text-paper">
            ENS Tier List
          </h1>
          <p className="text-[clamp(13px,1.7vw,16px)] font-medium leading-snug tracking-tight text-[var(--color-mute)]">
            How good is your ENS integration?
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 sm:gap-3">
          <div
            role="tablist"
            aria-label="Categories"
            className="inline-flex items-center gap-1 p-1 rounded-[12px] bg-surface border border-[var(--color-faint)]"
          >
            {TABS.map((t) => {
              const selected = t.key === active;
              return (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(t.key)}
                  className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-[9px] text-[13px] sm:text-[14px] font-semibold tracking-tight transition-colors ${
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

          <button
            aria-label="How it works"
            onClick={() => setHelpOpen(true)}
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-[rgba(242,241,236,0.35)] flex items-center justify-center text-paper font-bold text-[15px] sm:text-[18px] font-mono hover:bg-[rgba(242,241,236,0.04)] transition-colors"
          >
            ?
          </button>
        </div>
      </header>

      <TierList key={active} items={current.items} />

      <HowItWorks open={helpOpen} onClose={() => setHelpOpen(false)} />
    </>
  );
}
