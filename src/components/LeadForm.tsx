"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function LeadForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Оставьте заявку
            </h2>
            <p className="mt-3 text-slate-600">
              Перезвоним в удобное время, уточним адрес в Валенсии и предложим
              слот для бесплатной консультации.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Без обязательств до подписания договора</li>
              <li>Оценка точки подключения на месте</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md md:p-8">
            {sent ? (
              <p className="text-center text-slate-700">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="+34 ..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Комментарий
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="Район, удобное время, тип жилья"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition hover:bg-brand-600 hover:shadow-lg"
                >
                  Отправить заявку
                  <Send className="h-4 w-4" aria-hidden />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
