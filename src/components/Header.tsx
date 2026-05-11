"use client";

import { Menu, X, Droplets } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#features", label: "Преимущества" },
  { href: "#products", label: "Продукты" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold text-slate-900 transition hover:text-brand-600"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-md shadow-brand-500/25">
            <Droplets className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg tracking-tight">AguaSolucion</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-2xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition hover:bg-brand-600 hover:shadow-lg md:inline-flex"
          >
            Оставить заявку
          </a>
          <button
            type="button"
            className="inline-flex rounded-2xl border border-slate-200 p-2 text-slate-700 transition hover:border-brand-200 hover:bg-slate-50 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-2xl bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-brand-600"
              onClick={() => setOpen(false)}
            >
              Оставить заявку
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
