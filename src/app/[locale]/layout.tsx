import { Footer } from "@/components";
import AppGlobal from "@/features/layout/AppGlobal";
import { routing } from "@/i18n/routing";
import { LANGUAGE } from "@/lib/constants";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo } from "next/font/google";
import { ReactNode } from "react";

const cairoSans = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Khasmoula",
  description: "Khasmoula is a platform for creating and sharing coupons",
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === LANGUAGE["العربية"] ? "rtl" : "ltr"}
      className={`${cairoSans.variable} antialiased`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppGlobal>
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AppGlobal>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
