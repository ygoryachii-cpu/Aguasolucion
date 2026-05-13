"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Елена М.",
    role: "Кампанар",
    text:
      "Установили осмос за один визит. Вода мягкая, чай вкуснее. Напоминают о замене фильтров сами — очень удобно.",
  },
  {
    name: "Марк Т.",
    role: "Русафа",
    text:
      "Сомневался в подписке, но выходит дешевле бутылок. Мастер аккуратный, кухню не испортили.",
  },
  {
    name: "Анна К.",
    role: "Бенимаклет",
    text:
      "После теста воды всё объяснили простым языком. Подобрали компактную систему под маленький шкаф.",
  },
  {
    name: "Дмитрий С.",
    role: "Альборайя",
    text:
      "В частном доме было слабое давление — поставили систему с помпой. Наконец-то нормальный поток с крана, жена довольна.",
  },
  {
    name: "Ольга В.",
    role: "Гадор",
    text:
      "Дети стали пить больше воды прямо из крана, бутылки из магазина почти не берём. Спасибо за честную консультацию без давления.",
  },
  {
    name: "Сергей П.",
    role: "Торрент",
    text:
      "Показали цифры TDS до и после установки — разница наглядная. Оформили обслуживание, приезжают по графику, без сюрпризов.",
  },
  {
    name: "Ирина Л.",
    role: "Бурассот",
    text:
      "Долго выбирали компанию: здесь без навязчивости и «лишних» опций. Установка заняла пару часов, за собой всё убрали.",
  },
  {
    name: "Павел Н.",
    role: "Л'Эльяна",
    text:
      "С минерализацией вода приятная на вкус, не «плоская». Мастер всё подключил аккуратно и объяснил, что за каким модулем.",
  },
  {
    name: "Наталья Р.",
    role: "Чива",
    text:
      "В старом доме вода с привкусом и осадком. После осмоса кипятить не обязательно — пьём спокойно, чайник почти без накипи.",
  },
  {
    name: "Виктор Г.",
    role: "Масамагрелль",
    text:
      "По подписке заранее напомнили о проверке и приехали в удобное окно. Сервис предсказуемый — рекомендую знакомым.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-slate-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Отзывы клиентов
          </h2>
          <p className="mt-3 text-slate-600">
            Реальные истории из Валенсии и окрестностей.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <figure className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-md md:p-10">
            <Quote
              className="absolute right-6 top-6 h-10 w-10 text-brand-500/15"
              aria-hidden
            />
            <blockquote className="relative text-lg leading-relaxed text-slate-700 md:text-xl">
              {t.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-6">
              <div>
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  aria-label="Предыдущий отзыв"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  aria-label="Следующий отзыв"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </figcaption>
            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={
                    i === index
                      ? "h-2 w-6 shrink-0 rounded-full bg-brand-500 transition"
                      : "h-2 w-2 shrink-0 rounded-full bg-slate-300 transition hover:bg-slate-400"
                  }
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
