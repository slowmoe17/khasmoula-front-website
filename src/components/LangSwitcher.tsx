"use client";

import { useLocalization } from "@/hooks";
import { useTranslations } from "next-intl";
import { useCallback, useTransition } from "react";

function LangSwitcher() {
  const [isPending, startTransition] = useTransition();

  const { changeLocale } = useLocalization();

  const t = useTranslations();

  const changeLocaleHandler = useCallback(() => {
    startTransition(() => {
      changeLocale();
    });
  }, [changeLocale]);

  return (
    <button
      className="flex items-center gap-2"
      onClick={changeLocaleHandler}
      disabled={isPending}
    >
      {/* <Globe size={20} /> */}
      <span className="font-semibold text-xl uppercase hover:text-primary transition-all duration-300">
        {t("langCode")}
      </span>
    </button>
  );
}

export default LangSwitcher;
