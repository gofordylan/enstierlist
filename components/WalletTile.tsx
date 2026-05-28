"use client";

import Image from "next/image";
import type { Wallet } from "@/lib/wallets";

export default function WalletTile({ wallet, onClick }: { wallet: Wallet; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Expand ${wallet.name} score`}
      className="shrink-0 w-[64px] h-[64px] sm:w-[96px] sm:h-[96px] md:w-[132px] md:h-[132px] bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[22px] p-2 sm:p-3 md:p-[18px] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.04)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.32)] active:translate-y-0 transition-all"
    >
      <Image
        src={wallet.logo}
        alt={`${wallet.name} logo`}
        width={96}
        height={96}
        className="w-full h-full object-contain"
        unoptimized
      />
    </button>
  );
}
