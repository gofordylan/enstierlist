"use client";

import Image from "next/image";
import { CRITERIA, scoreOf, tierOf, type Wallet } from "@/lib/wallets";

export default function ExpandedCard({ wallet }: { wallet: Wallet }) {
  const score = scoreOf(wallet);
  const tier = tierOf(wallet);

  return (
    <section
      aria-label={`${wallet.name} score detail`}
      className="bg-surface border border-[var(--color-faint)] rounded-[14px] sm:rounded-[18px] overflow-hidden"
    >
      <header className="flex items-center gap-3 sm:gap-4 px-4 sm:px-7 py-4 sm:py-6 border-b border-[rgba(242,241,236,0.06)]">
        <div className="shrink-0 w-[44px] h-[44px] sm:w-[64px] sm:h-[64px] bg-white rounded-[10px] sm:rounded-[14px] p-1.5 sm:p-2.5 flex items-center justify-center">
          <Image
            src={wallet.logo}
            alt={`${wallet.name} logo`}
            width={64}
            height={64}
            className="w-full h-full object-contain"
            unoptimized
          />
        </div>
        <div className="text-[18px] sm:text-[26px] font-bold tracking-tight text-paper flex-1 min-w-0 truncate">
          {wallet.name}
        </div>
        <div
          className="font-mono text-[11px] sm:text-[13px] font-bold text-paper px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[rgba(242,241,236,0.06)] border border-[rgba(242,241,236,0.20)] rounded-[6px] sm:rounded-[8px] whitespace-nowrap"
          aria-label={`Score ${score} out of 4, tier ${tier}`}
        >
          {score} / 4
        </div>
      </header>
      <ul className="flex flex-col">
        {CRITERIA.map((c, i) => {
          const passes = wallet.scores[c.key];
          return (
            <li
              key={c.key}
              className={`flex items-center justify-between px-4 sm:px-7 py-3.5 sm:py-5 ${
                i < CRITERIA.length - 1 ? "border-b border-[rgba(242,241,236,0.06)]" : ""
              }`}
            >
              <span className="text-[14px] sm:text-[17px] font-medium text-paper">{c.label}</span>
              <span
                className="shrink-0 w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] rounded-full flex items-center justify-center"
                style={{
                  background: passes ? "rgba(74,222,128,0.14)" : "rgba(248,113,113,0.14)",
                }}
                aria-label={passes ? "Supported" : "Not supported"}
              >
                {passes ? (
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7.5L5.5 10L11 4.5"
                      stroke="#4ADE80"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 2L10 10M10 2L2 10"
                      stroke="#F87171"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
