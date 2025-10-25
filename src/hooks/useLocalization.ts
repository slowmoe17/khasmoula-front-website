"use client";

import { LANGUAGE } from "@/lib/constants";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useCallback } from "react";

export function useLocalization(
  { namespace }: { namespace?: string } = { namespace: "" }
) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations(namespace || "");

  const locale = useLocale() as LANGUAGE;

  const direction: "rtl" | "ltr" =
    locale === LANGUAGE["العربية"] ? "rtl" : "ltr";
  const isArabic = locale === LANGUAGE["العربية"];
  const isEnglish = locale === LANGUAGE.English;

  const changeLocale = useCallback(() => {
    const nextLocale =
      locale === LANGUAGE.English ? LANGUAGE["العربية"] : LANGUAGE.English;

    router.replace(pathname, { locale: nextLocale });
  }, [locale, pathname, router]);

  return { isArabic, isEnglish, direction, t, locale, changeLocale };
}
