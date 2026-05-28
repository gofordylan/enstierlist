"use client";

import { useState } from "react";
import HowItWorks from "./HowItWorks";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-start justify-between gap-4 sm:gap-8">
        <div className="flex flex-col gap-2 sm:gap-3 flex-1 min-w-0">
          <h1 className="text-[clamp(30px,6vw,56px)] font-bold leading-[1.02] tracking-[-0.025em] text-paper">
            ENS Tier List
          </h1>
          <p className="text-[clamp(14px,2vw,20px)] font-medium leading-snug tracking-tight text-[var(--color-mute)]">
            How good is your ENS integration?
          </p>
        </div>
        <button
          aria-label="How it works"
          onClick={() => setOpen(true)}
          className="shrink-0 mt-1 sm:mt-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-[rgba(242,241,236,0.35)] flex items-center justify-center text-paper font-bold text-[15px] sm:text-[18px] font-mono hover:bg-[rgba(242,241,236,0.04)] transition-colors"
        >
          ?
        </button>
      </header>
      <HowItWorks open={open} onClose={() => setOpen(false)} />
    </>
  );
}
