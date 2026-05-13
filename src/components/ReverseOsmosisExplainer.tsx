export function ReverseOsmosisExplainer() {
  return (
    <section
      id="osmosis"
      className="scroll-mt-24 border-t border-slate-200/80 bg-white py-14 md:py-20"
      aria-labelledby="osmosis-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2
          id="osmosis-heading"
          className="text-balance text-center text-2xl font-bold uppercase tracking-wide text-brand-700 md:text-3xl md:tracking-[0.08em]"
        >
          Всё просто. Так работает для вас обратный осмос
        </h2>
        <div className="mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-3 shadow-sm md:p-6">
          <img
            src="/images/reverse-osmosis-scheme.png"
            alt="Схема работы обратного осмоса: водопроводная вода под давлением проходит через полупроницаемую мембрану RO, очищенная вода поступает в резервуар и кран питьевой воды, концентрат отводится в дренаж."
            className="mx-auto block h-auto w-full max-w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
