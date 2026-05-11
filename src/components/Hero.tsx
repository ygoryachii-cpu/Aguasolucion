import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-cyan-300/40 blur-3xl" />
        <svg
          className="absolute bottom-0 left-0 right-0 text-brand-500/15"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,24 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24 lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            Валенсия · установка и сервис под ключ
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Чистая вода в вашем доме каждый день
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
            Профессиональная установка фильтров питьевой воды и подписочное
            обслуживание: вы пьёте воду без хлора и примесей, мы следим за
            сроками замены картриджей.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition hover:bg-brand-600 hover:shadow-lg"
            >
              Бесплатная консультация
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-brand-200 hover:bg-slate-50"
            >
              Смотреть системы
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md md:max-w-none">
          <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-brand-400/20 via-white to-cyan-100/60 shadow-md ring-1 ring-slate-200/80" />
          <div className="relative flex h-full min-h-[280px] items-center justify-center rounded-2xl border border-white/80 bg-white/60 p-8 shadow-sm backdrop-blur-sm md:min-h-[360px]">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-500 text-white shadow-lg shadow-brand-500/35">
                <svg
                  viewBox="0 0 64 64"
                  className="h-14 w-14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M32 8c-8 12-16 20-16 32a16 16 0 1032 0c0-12-8-20-16-32z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M24 40c4-2 8-2 16 0"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Осмос · уголь · постфильтрация
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
