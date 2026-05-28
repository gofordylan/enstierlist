"use client";

import { useEffect } from "react";

const ITEMS = [
  {
    key: "forward",
    title: "Forward Resolution",
    body: "Type a .eth name in the send field and it resolves to the right address. Table stakes — most wallets clear this.",
  },
  {
    key: "reverse",
    title: "Reverse Resolution",
    body: "The wallet displays the primary .eth name instead of the raw 0x… address — in the account header, transaction history, and contact lists.",
  },
  {
    key: "avatar",
    title: "Avatar",
    body: "The ENS avatar (NFT or image URL set in the ENS record) renders as the profile picture for that account or counterparty.",
  },
  {
    key: "offchain",
    title: "Offchain Names",
    body: "Names that use ENSIP-10 wildcards with EIP-3668 CCIP-Read resolve correctly — cb.id, Base names, name.uni.eth subnames.",
  },
];

export default function HowItWorks({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="How it works"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[640px] bg-surface border border-[var(--color-faint)] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-faint)]">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--color-dim)] mb-1 font-mono">
              Methodology
            </div>
            <div className="text-xl font-bold tracking-tight text-paper">How it works</div>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-[rgba(242,241,236,0.14)] flex items-center justify-center hover:bg-[rgba(242,241,236,0.04)] transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 2L10 10M10 2L2 10" stroke="rgba(242,241,236,0.55)" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5 flex flex-col gap-5 text-[15px] leading-relaxed text-[var(--color-mute)]">
          <p>
            Each wallet is scored on four binary criteria. Score 4/4 = <span className="text-paper font-semibold">S</span>,
            3/4 = <span className="text-paper font-semibold">A</span>, 2/4 = <span className="text-paper font-semibold">B</span>,
            1/4 = <span className="text-paper font-semibold">C</span>, 0/4 = <span className="text-paper font-semibold">F</span>.
          </p>
          <div className="flex flex-col gap-4">
            {ITEMS.map((it) => (
              <div key={it.key} className="flex flex-col gap-1.5">
                <div className="text-paper font-semibold text-[15px]">{it.title}</div>
                <div className="text-[14px]">{it.body}</div>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-[var(--color-dim)] pt-2 border-t border-[var(--color-faint)]">
            Strict binary judgements. Partial support that only works in some screens counts as a fail.
          </p>
        </div>
      </div>
    </div>
  );
}
