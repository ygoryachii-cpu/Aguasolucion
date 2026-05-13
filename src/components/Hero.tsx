import { ArrowRight, ShieldCheck } from "lucide-react";

import { AguasolucionLogo } from "./AguasolucionLogo";

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
            Профессиональная установка фильтров питьевой воды и обслуживание по
            подписке: вы пьёте чистую воду без хлора и примесей, мы следим за
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

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-brand-400/20 via-white to-cyan-100/60 shadow-md ring-1 ring-slate-200/80" />
          <div className="relative flex min-h-[280px] items-center justify-center rounded-2xl border border-white/80 bg-white/60 px-6 py-10 shadow-sm backdrop-blur-sm md:min-h-[360px] md:px-10">
            <AguasolucionLogo className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
