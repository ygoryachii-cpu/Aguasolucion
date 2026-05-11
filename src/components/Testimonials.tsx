"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "\u0415\u043b\u0435\u043d\u0430 \u041c.",
    role: "\u041a\u0430\u043c\u043f\u0430\u043d\u0430\u0440",
    text:
      "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u043e\u0441\u043c\u043e\u0441 \u0437\u0430 \u043e\u0434\u0438\u043d \u0432\u0438\u0437\u0438\u0442. \u0412\u043e\u0434\u0430 \u043c\u044f\u0433\u043a\u0430\u044f, \u0447\u0430\u0439 \u0432\u043a\u0443\u0441\u043d\u0435\u0435. \u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u044e\u0442 \u043e \u0437\u0430\u043c\u0435\u043d\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u0441\u0430\u043c\u0438 \u2014 \u043e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u043d\u043e.",
  },
  {
    name: "\u041c\u0430\u0440\u043a \u0422.",
    role: "\u0420\u0443\u0441\u0430\u0444\u0430",
    text:
      "\u0421\u043e\u043c\u043d\u0435\u0432\u0430\u043b\u0441\u044f \u0432 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435, \u043d\u043e \u0432\u044b\u0445\u043e\u0434\u0438\u0442 \u0434\u0435\u0448\u0435\u0432\u043b\u0435 \u0431\u0443\u0442\u044b\u043b\u043e\u043a. \u041c\u0430\u0441\u0442\u0435\u0440 \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u044b\u0439, \u043a\u0443\u0445\u043d\u044e \u043d\u0435 \u0438\u0441\u043f\u043e\u0440\u0442\u0438\u043b\u0438.",
  },
  {
    name: "\u0410\u043d\u043d\u0430 \u041a.",
    role: "\u0411\u0435\u043d\u0438\u043c\u0430\u043a\u043b\u0435\u0442",
    text:
      "\u041f\u043e\u0441\u043b\u0435 \u0442\u0435\u0441\u0442\u0430 \u0432\u043e\u0434\u044b \u0432\u0441\u0451 \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u044b\u043c \u044f\u0437\u044b\u043a\u043e\u043c. \u041f\u043e\u0434\u043e\u0431\u0440\u0430\u043b\u0438 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043f\u043e\u0434 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0448\u043a\u0430\u0444.",
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
            {"\u041e\u0442\u0437\u044b\u0432\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"}
          </h2>
          <p className="mt-3 text-slate-600">
            {
              "\u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0438\u0437 \u0412\u0430\u043b\u0435\u043d\u0441\u0438\u0438 \u0438 \u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0435\u0439."
            }
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
                  aria-label="\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u043e\u0442\u0437\u044b\u0432"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  aria-label="\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043e\u0442\u0437\u044b\u0432"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </figcaption>
            <div className="mt-4 flex justify-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={
                    i === index
                      ? "h-2 w-6 rounded-full bg-brand-500 transition"
                      : "h-2 w-2 rounded-full bg-slate-300 transition hover:bg-slate-400"
                  }
                  aria-label={`\u041e\u0442\u0437\u044b\u0432 ${i + 1}`}
                />
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
