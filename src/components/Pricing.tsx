import { Check } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    price: "от 24 €/мес",
    description: "Для небольших кухонь и умеренного расхода.",
    features: [
      "1 плановый визит в год",
      "Проверка давления и фитингов",
      "Скидка 10% на расходники",
    ],
    cta: "Подключить",
    popular: false,
  },
  {
    name: "Расширенный сервис",
    price: "от 39 €/мес",
    description: "Оптимальный баланс заботы и цены.",
    features: [
      "2 визита в год + санация",
      "Замена префильтров включена",
      "Приоритетная линия поддержки",
    ],
    cta: "Популярный выбор",
    popular: true,
  },
  {
    name: "Полная подписка",
    price: "от 59 €/мес",
    description: "Максимум спокойствия «под ключ».",
    features: [
      "Неограниченные выезды по согласованию",
      "Все расходники по регламенту",
      "Расширенная гарантия на работы",
    ],
    cta: "Узнать детали",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Тарифы обслуживания
          </h2>
          <p className="mt-3 text-slate-600">
            Прозрачные планы без скрытых платежей. Точная цена после осмотра.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                plan.popular
                  ? "border-brand-400 bg-gradient-to-b from-brand-50 to-white ring-2 ring-brand-500/20 lg:scale-[1.02]"
                  : "border-slate-100 bg-slate-50/50 hover:border-brand-200"
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                  Популярный
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-2xl font-bold text-brand-600">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-slate-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl py-3.5 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/30 hover:bg-brand-600 hover:shadow-lg"
                    : "border border-slate-200 bg-white text-slate-900 hover:border-brand-300 hover:bg-slate-50"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
