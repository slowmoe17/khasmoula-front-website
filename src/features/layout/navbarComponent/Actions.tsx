"use client";

import { Button, LangSwitcher, SwitchCountry } from "@/components";
import { BookmarkIcon } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/route";

import { useLocalization } from "@/hooks";
import { useFavoritesContext } from "@/context/FavoritesContext";

function Actions() {
  const { t } = useLocalization({ namespace: "links" });
  const { favorites } = useFavoritesContext();

  return (
    <div className="flex items-center gap-7">
      <Button
        variant="default"
        className="font-bold px-4 rounded-full h-10.5 w-32"
        asChild
      >
        <Link href={routes.contact}>{t("contact")}</Link>
      </Button>

      <Link href={routes.favorite} className="relative">
        <BookmarkIcon className="w-6 h-6 text-primary" />

        {favorites.length > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
            {favorites.length}
          </span>
        )}
      </Link>

      <LangSwitcher />

      <SwitchCountry />
    </div>
  );
}

export default Actions;
