import { Check, ImageIcon } from "lucide-react";

const products = [
  {
    name: "AquaCompact",
    tagline: "Под мойку · 5 ступеней",
    specs: [
      "Механический + угольный префильтр",
      "Мембрана обратного осмоса",
      "Минерализатор и постфильтр",
    ],
  },
  {
    name: "AquaPro Osmosis",
    tagline: "Премиум · помпа и индикаторы",
    specs: [
      "Повышенная производительность",
      "Электронный контроль протечек",
      "Комплект кранов: чистая / минеральная",
    ],
  },
  {
    name: "AquaSoft",
    tagline: "Без слива · умягчение",
    specs: [
      "Ионообменная смола",
      "Соль для регенерации в комплекте",
      "Идеально для жёсткой воды Валенсии",
    ],
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="scroll-mt-24 bg-slate-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Системы фильтрации
          </h2>
          <p className="mt-3 text-slate-600">
            Подберём решение под вашу кухню, расход воды и бюджет.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-100 to-brand-50 text-brand-400">
                <ImageIcon className="h-16 w-16 opacity-60" strokeWidth={1.25} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-brand-600">{p.tagline}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-slate-600">
                  {p.specs.map((s) => (
                    <li key={s} className="flex gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                        aria-hidden
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-brand-500 bg-white py-3 text-sm font-semibold text-brand-600 transition hover:bg-brand-500 hover:text-white"
                >
                  Выбрать
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
