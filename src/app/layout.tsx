import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AguaSolucion — чистая вода в доме | Валенсия",
  description:
    "Установка и подписочное обслуживание фильтров питьевой воды в Валенсии. Консультация и подбор системы.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
