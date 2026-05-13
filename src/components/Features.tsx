import { CalendarClock, PiggyBank, Shield } from "lucide-react";

const features = [
  {
    title: "Безопасная вода для всей семьи",
    description:
      "Фильтры обратного осмоса удаляют 95–98% примесей. Покажем Вам разницу в количестве примесей по сравнению с водопроводной водой после установки фильтра.",
    icon: Shield,
  },
  {
    title: "Экономия сил, места и денег.",
    description:
      "Меньше покупной бутилированной воды. Не нужно постоянно носить воду из магазина или хранить тяжёлые бутыли от кулера.",
    icon: PiggyBank,
  },
  {
    title: "Плановое обслуживание",
    description:
      "Напоминания о замене модулей и выезд мастера по графику — без сюрпризов.",
    icon: CalendarClock,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Почему выбирают AguaSolucion
          </h2>
          <p className="mt-3 text-slate-600">
            Фокус на качестве воды, прозрачных тарифах и спокойствии клиента.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
