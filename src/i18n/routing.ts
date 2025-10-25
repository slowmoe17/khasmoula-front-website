import { LANGUAGE } from "@/lib/constants";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.values(LANGUAGE),

  // Used when no locale matches
  defaultLocale: LANGUAGE["العربية"],

  localeDetection: false,
});
