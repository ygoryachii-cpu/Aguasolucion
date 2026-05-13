"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Нужен ли доступ к канализации?",
    a:
      "Для систем обратного осмоса нужен дренаж в раковину или канализацию. Мы оцениваем это на бесплатном выезде и предложим вариант без слива, если это критично.",
  },
  {
    q: "Как часто менять фильтры?",
    a:
      "Префильтры обычно раз в 6–12 месяцев, мембрана — раз в 24–36 месяцев в зависимости от качества исходной воды и объёма потребления.",
  },
  {
    q: "Сколько занимает установка?",
    a:
      "Типовая установка под мойку занимает 2–4 часа. Сложные случаи согласуем заранее.",
  },
  {
    q: "Есть ли гарантия?",
    a:
      "Да, на монтажные работы и подключённые узлы действует гарантия. Условия прописываем в договоре до начала работ.",
  },
  {
    q: "Я снимаю квартиру, можно ли перенести систему очистки воды, если я перееду?",
    a:
      "Да, по вашему запросу мы перенесём систему очистки воды вместе с вашим переездом. Советуем согласовать этот вопрос с арендодателем заранее.",
  },
  {
    q: "Что мне делать после первого года использования системы очистки воды?",
    a:
      "За 1 месяц до истечения первого года использования вашей системы фильтрации мы свяжемся с вами и предложим плановую замену фильтров. Эта услуга оплачивается дополнительно.",
  },
  {
    q: "Я снял квартиру недавно, у меня уже установлена система очистки воды с обратным осмосом. Я не знаю, когда там менялись фильтры и мембрана, и можно ли пить воду из этой системы?",
    a:
      "Мы проведём замену фильтров в вашей системе очистки: заменим фильтры и мембрану и проверим эффективность работы системы с помощью TDS-метра.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Частые вопросы
          </h2>
          <p className="mt-3 text-slate-600">
            Если не нашли ответ — напишите в форме ниже.
          </p>
        </div>
        <ul className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm transition hover:border-brand-200"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 md:text-base"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-pretty pr-2">{item.q}</span>
                  <ChevronDown
                    className={
                      isOpen
                        ? "h-5 w-5 shrink-0 rotate-180 text-brand-500 transition"
                        : "h-5 w-5 shrink-0 text-brand-500 transition"
                    }
                    aria-hidden
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-slate-100 px-5 pb-4 pt-2 text-pretty text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
