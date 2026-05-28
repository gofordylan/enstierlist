"use client";

import Image from "next/image";
import { CRITERIA, scoreOf, tierOf, type Wallet } from "@/lib/wallets";

function githubLabel(url: string): string {
  try {
    const u = new URL(url);
    return `${u.hostname.replace(/^www\./, "")}${u.pathname.replace(/\/$/, "")}`;
  } catch {
    return url;
  }
}

export default function ExpandedCard({ wallet }: { wallet: Wallet }) {
  const score = scoreOf(wallet);
  const tier = tierOf(wallet);
  const href = `https://${wallet.domain}`;

  return (
    <section
      aria-label={`${wallet.name} score detail`}
      className="bg-surface border border-[var(--color-faint)] rounded-[14px] sm:rounded-[18px] overflow-hidden flex flex-col flex-1 w-full"
    >
      <header className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-[rgba(242,241,236,0.06)]">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${wallet.name}`}
          className="shrink-0 w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] bg-white rounded-[10px] sm:rounded-[12px] p-1.5 sm:p-2 flex items-center justify-center"
        >
          <Image
            src={wallet.logo}
            alt={`${wallet.name} logo`}
            width={56}
            height={56}
            className="w-full h-full object-contain"
            unoptimized
          />
        </a>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[18px] sm:text-[22px] font-bold tracking-tight text-paper flex-1 min-w-0 truncate hover:underline underline-offset-4 decoration-1 decoration-[var(--color-mute)] transition-all inline-flex items-center gap-1.5"
        >
          {wallet.name}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 opacity-50">
            <path d="M3.5 2H10M10 2V8.5M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
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
              className={`flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 ${
                i < CRITERIA.length - 1 ? "border-b border-[rgba(242,241,236,0.06)]" : ""
              }`}
            >
              <span className="text-[14px] sm:text-[15px] font-medium text-paper">{c.label}</span>
              <span
                className="shrink-0 w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] rounded-full flex items-center justify-center"
                style={{
                  background: passes ? "rgba(74,222,128,0.14)" : "rgba(248,113,113,0.14)",
                }}
                aria-label={passes ? "Supported" : "Not supported"}
              >
                {passes ? (
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7.5L5.5 10L11 4.5" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 2L10 10M10 2L2 10" stroke="#F87171" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto px-4 sm:px-6 py-4 sm:py-5 border-t border-[rgba(242,241,236,0.06)]">
        <div className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--color-dim)] mb-2.5">
          Links
        </div>
        <ul className="flex flex-col gap-1.5">
          <li>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] sm:text-[13px] text-[var(--color-mute)] hover:text-paper truncate block transition-colors"
            >
              {wallet.domain}
            </a>
          </li>
          {wallet.github && (
            <li>
              <a
                href={wallet.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] sm:text-[13px] text-[var(--color-mute)] hover:text-paper truncate block transition-colors"
              >
                {githubLabel(wallet.github)}
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
