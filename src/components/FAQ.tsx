"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "\u041d\u0443\u0436\u0435\u043d \u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438?",
    a: "\u0414\u043b\u044f \u0441\u0438\u0441\u0442\u0435\u043c \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u043e\u0441\u043c\u043e\u0441\u0430 \u043d\u0443\u0436\u0435\u043d \u0434\u0440\u0435\u043d\u0430\u0436 \u0432 \u0440\u0430\u043a\u043e\u0432\u0438\u043d\u0443 \u0438\u043b\u0438 \u043a\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e. \u041c\u044b \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u043c \u044d\u0442\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u043c \u0432\u044b\u0435\u0437\u0434\u0435 \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0431\u0435\u0437 \u0441\u043b\u0438\u0432\u0430, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u043d\u043e.",
  },
  {
    q: "\u041a\u0430\u043a \u0447\u0430\u0441\u0442\u043e \u043c\u0435\u043d\u044f\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b?",
    a: "\u041f\u0440\u0435\u0444\u0438\u043b\u044c\u0442\u0440\u044b \u043e\u0431\u044b\u0447\u043d\u043e \u0440\u0430\u0437 \u0432 6\u201312 \u043c\u0435\u0441\u044f\u0446\u0435\u0432, \u043c\u0435\u043c\u0431\u0440\u0430\u043d\u0430 \u2014 \u0440\u0430\u0437 \u0432 24\u201336 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0432\u043e\u0434\u044b \u0438 \u043e\u0431\u044a\u0451\u043c\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f.",
  },
  {
    q: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430?",
    a: "\u0422\u0438\u043f\u043e\u0432\u0430\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043e\u0434 \u043c\u043e\u0439\u043a\u0443 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 2\u20134 \u0447\u0430\u0441\u0430. \u0421\u043b\u043e\u0436\u043d\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u0443\u0435\u043c \u0437\u0430\u0440\u0430\u043d\u0435\u0435.",
  },
  {
    q: "\u0415\u0441\u0442\u044c \u043b\u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f?",
    a: "\u0414\u0430, \u043d\u0430 \u043c\u043e\u043d\u0442\u0430\u0436\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0435 \u0443\u0437\u043b\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f. \u0423\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c \u0432 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0435 \u0434\u043e \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {"\u0427\u0430\u0441\u0442\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"}
          </h2>
          <p className="mt-3 text-slate-600">
            {
              "\u0415\u0441\u043b\u0438 \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u043e\u0442\u0432\u0435\u0442 \u2014 \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432 \u0444\u043e\u0440\u043c\u0435 \u043d\u0438\u0436\u0435."
            }
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
                  {item.q}
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
                  <div className="border-t border-slate-100 px-5 pb-4 pt-2 text-sm leading-relaxed text-slate-600">
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
