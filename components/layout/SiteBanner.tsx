const TAGLINE = "Get Ready. Get Certified. Get Funding.";

function SBAReadyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="SBA Ready"
      className={className}
    >
      <circle
        cx="100"
        cy="100"
        r="94"
        fill="#ffffff"
        stroke="#1c2e45"
        strokeWidth="4"
      />
      <rect x="58" y="36" width="78" height="5" rx="1" fill="#e3c27a" />
      <rect x="62" y="44" width="70" height="5" rx="1" fill="#1c2e45" />
      <rect x="66" y="52" width="62" height="5" rx="1" fill="#e3c27a" />
      <path
        fill="#e3c27a"
        d="M44 48 L47.2 57.2 L57 57.2 L49.4 62.8 L52.6 72 L44 66.4 L35.4 72 L38.6 62.8 L31 57.2 L40.8 57.2 Z"
      />
      <rect x="66" y="148" width="68" height="5" rx="1" fill="#e3c27a" />
      <rect x="72" y="156" width="56" height="5" rx="1" fill="#1c2e45" />
      <rect x="78" y="164" width="44" height="5" rx="1" fill="#e3c27a" />
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fill="#1c2e45"
        fontFamily="var(--font-dm-sans), Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
        letterSpacing="1"
      >
        SBA
      </text>
      <text
        x="100"
        y="136"
        textAnchor="middle"
        fill="#e3c27a"
        fontFamily="var(--font-dm-sans), Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="3"
      >
        READY
      </text>
    </svg>
  );
}

export function SiteBanner() {
  return (
    <div
      role="img"
      aria-label={`SBAReady.org — ${TAGLINE}`}
      className="relative w-full overflow-hidden border-b border-warm bg-[#f5f2ec]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -bottom-24 -left-[10%] h-72 w-[120%] rounded-[50%] bg-[#e6ddd1]/70 blur-[1px]" />
        <div className="absolute -bottom-16 left-[20%] h-56 w-[90%] rounded-[50%] bg-[#ddd4c8]/50 blur-[1px]" />
        <div className="absolute bottom-0 right-0 h-40 w-1/2 bg-gradient-to-l from-[#e8dfd3]/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-10 sm:flex-row sm:justify-between sm:py-12 lg:px-10 lg:py-14">
        <div className="text-center sm:text-left">
          <p className="font-display text-[2rem] font-bold leading-tight text-navy sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem]">
            SBAReady.org
          </p>
          <div className="mx-auto mt-3 h-px w-28 bg-gold sm:mx-0" />
          <p className="mt-4 font-sans text-base font-normal tracking-wide text-navy sm:text-lg md:text-xl">
            {TAGLINE}
          </p>
        </div>

        <SBAReadyLogo className="h-28 w-28 shrink-0 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40" />
      </div>
    </div>
  );
}
