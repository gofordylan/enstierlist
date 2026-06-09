"use client";

import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectTile({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Expand ${project.name} score`}
      className="shrink-0 w-[56px] h-[56px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-[11px] sm:rounded-[14px] md:rounded-[18px] p-1.5 sm:p-2.5 md:p-[14px] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.04)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.32)] active:translate-y-0 transition-all"
    >
      <Image
        src={project.logo}
        alt={`${project.name} logo`}
        width={96}
        height={96}
        className={`w-full h-full ${project.round ? "object-cover rounded-full" : "object-contain"}`}
        unoptimized
      />
    </button>
  );
}
