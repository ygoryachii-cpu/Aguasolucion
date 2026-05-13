import { ProductImage } from "./ProductImage";

const filtrationSteps = [
  {
    title: "Осадочный фильтр",
    body:
      "Сделан из полипропилена, пористость 5 микрон. Задерживает ил, грязь, песок, оксиды и любые частицы размером более 5 микрон.",
  },
  {
    title: "Гранулированный угольный фильтр",
    body:
      "Гранулы активированного угля из скорлупы кокосового ореха. Устраняет запахи, органические вещества, примеси и соединения, которые влияют на вкус и запах воды. Нейтрализует привкус и запах.",
  },
  {
    title: "Блочный угольный фильтр (Carbon Block)",
    body:
      "Блок прессованного активированного угля из скорлупы кокоса, пористость 5 микрон. Улучшает цвет воды, удаляет органику, примеси, нейтрализует запах и вкус воды.",
  },
  {
    title: "Мембрана обратного осмоса",
    body:
      "Мембрана из полиамида, 50 GPD (FD). Удаляет хлорамины, фтор, органические вещества, сельскохозяйственные химикаты (PFAS), ПХД, нитраты, тяжёлые металлы и др.",
  },
  {
    title: "Постфильтр «Активный углерод»",
    body:
      "Активированный уголь из скорлупы кокоса, разработан для улучшения вкуса воды после очистки и хранения в резервуаре.",
  },
  {
    title: "Реминерализационный фильтр",
    body:
      "Обогащает воду природными минералами: кальцием, магнием, калием и натрием. Незаменимые элементы, которые организм усваивает с водой в оптимальной форме.",
  },
] as const;

const products = [
  {
    name: "Система NatureWater, базовый вариант",
    summary: "Подходит для большинства пользователей.",
    imageSrc: "/images/naturewater-basic.jpg",
    imageAlt: "Система обратного осмоса NatureWater, базовая комплектация",
  },
  {
    name: "Система NatureWater с помпой",
    summary:
      "В комплекте помпа, повышающая давление воды в системе очистки — подходит для водопроводов с пониженным давлением: загородные дома, дома со старыми водопроводами.",
    imageSrc: "/images/naturewater-with-pump.jpg",
    imageAlt:
      "Система обратного осмоса NatureWater с помпой повышения давления",
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
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.name}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
            >
              <ProductImage src={p.imageSrc} alt={p.imageAlt} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600">
                  {p.summary}
                </p>
                <p className="mt-6 text-sm font-semibold text-slate-900">
                  6 ступеней очистки:
                </p>
                <ol className="mb-6 mt-3 list-decimal space-y-4 pl-5 text-sm text-slate-600 marker:font-semibold marker:text-brand-600">
                  {filtrationSteps.map((step) => (
                    <li key={step.title} className="pl-1">
                      <span className="font-semibold text-slate-900">
                        {step.title}
                      </span>
                      <p className="mt-1 text-pretty leading-relaxed">
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>
                <a
                  href="#contact"
                  className="mt-auto inline-flex w-full items-center justify-center rounded-2xl border border-brand-500 bg-white py-3 text-sm font-semibold text-brand-600 transition hover:bg-brand-500 hover:text-white"
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
