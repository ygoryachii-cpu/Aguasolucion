import { Droplets } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <Link href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-md">
              <Droplets className="h-5 w-5" aria-hidden />
            </span>
            AguaSolucion
          </Link>
          <p className="mt-3 max-w-xs text-sm text-slate-600">
            Валенсия, Испания. Установка и сервис фильтров питьевой воды.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-medium text-slate-900">Связь</span>
          <a
            href="https://wa.me/34000000000"
            className="text-slate-600 transition hover:text-brand-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/aguasolucion"
            className="text-slate-600 transition hover:text-brand-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-medium text-slate-900">Документы</span>
          <a href="#" className="text-slate-600 transition hover:text-brand-600">
            Политика конфиденциальности
          </a>
          <a href="#" className="text-slate-600 transition hover:text-brand-600">
            Условия использования
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs text-slate-500 md:px-6">
        © {year} AguaSolucion. Все права защищены.
      </p>
    </footer>
  );
}
