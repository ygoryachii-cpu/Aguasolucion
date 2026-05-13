type AguasolucionLogoProps = {
  className?: string;
};

/** Векторная версия фирменного знака: капля + AGUASOLUCION.ES */
export function AguasolucionLogo({ className }: AguasolucionLogoProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 200 172"
        className="mx-auto block h-auto w-full max-w-[240px]"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="as-drop-body"
            x1="10%"
            y1="0%"
            x2="90%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="45%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="as-drop-shine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <g opacity="0.2" transform="translate(2 2)">
          <path
            fill="#0369a1"
            d="M100 12c-3 0-6 4-8 9-15 32-44 76-44 105 0 29 23 52 52 52s52-23 52-52c0-29-29-73-44-105-2-5-5-9-8-9z"
          />
        </g>
        <path
          fill="url(#as-drop-body)"
          d="M100 12c-3 0-6 4-8 9-15 32-44 76-44 105 0 29 23 52 52 52s52-23 52-52c0-29-29-73-44-105-2-5-5-9-8-9z"
        />
        <path
          fill="url(#as-drop-shine)"
          d="M100 26c-11 26-32 64-32 90 0 16 13 29 32 29s32-13 32-29c0-26-21-64-32-90z"
        />
        <path
          fill="#ffffff"
          d="M100 46c-7 16-20 40-20 62 0 11 9 20 20 20s20-9 20-20c0-22-13-46-20-62z"
        />
      </svg>
      <p className="mt-1 text-center text-base font-bold tracking-[0.14em] text-brand-700 md:text-lg">
        AGUASOLUCION.ES
      </p>
    </div>
  );
}
