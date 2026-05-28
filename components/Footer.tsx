const REPO_URL = "https://github.com/gofordylan/enstierlist";

export default function Footer() {
  return (
    <footer className="bg-surface border border-[var(--color-faint)] rounded-[14px] sm:rounded-[16px] p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-[rgba(242,241,236,0.06)] border border-[var(--color-faint)] rounded-[9px] sm:rounded-[11px] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px]">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.81 3.44 22.31 8.21 23.9C8.81 24.01 9 23.65 9 23.34V21.25C5.67 21.96 4.97 19.83 4.97 19.83C4.42 18.45 3.63 18.09 3.63 18.09C2.55 17.36 3.72 17.37 3.72 17.37C4.92 17.45 5.55 18.6 5.55 18.6C6.62 20.43 8.36 19.9 9.04 19.6C9.15 18.84 9.46 18.32 9.79 18.02C7.14 17.72 4.34 16.69 4.34 12.06C4.34 10.74 4.81 9.66 5.58 8.81C5.46 8.51 5.04 7.28 5.7 5.6C5.7 5.6 6.7 5.28 9 6.83C9.95 6.57 10.97 6.43 11.99 6.43C13.01 6.43 14.03 6.57 14.98 6.83C17.28 5.28 18.28 5.6 18.28 5.6C18.94 7.28 18.52 8.51 18.4 8.81C19.17 9.66 19.63 10.74 19.63 12.06C19.63 16.7 16.83 17.71 14.17 18.01C14.58 18.38 14.95 19.1 14.95 20.2V23.34C14.95 23.65 15.14 24.02 15.75 23.9C20.52 22.31 23.96 17.81 23.96 12.5C24 5.87 18.63 0.5 12 0.5Z"
              fill="#F2F1EC"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[13px] sm:text-[15px] font-semibold tracking-tight text-paper">
            enstierlist.com is open source
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium text-[var(--color-mute)] leading-snug">
            Spot a mistake or a missing wallet? Open a pull request.
          </div>
        </div>
      </div>
      <a
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-paper text-[#1A1B1F] rounded-[10px] sm:rounded-[11px] text-[13px] font-semibold hover:bg-white transition-colors whitespace-nowrap"
      >
        Open a PR on GitHub
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path d="M3.5 2H10M10 2V8.5M10 2L2 10" stroke="#1A1B1F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </footer>
  );
}
