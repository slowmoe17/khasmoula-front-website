"use client";

import { routes } from "@/lib/route";
import { cn } from "@/lib/utils";

import { usePathname, Link } from "@/i18n/navigation";
import React, { Fragment } from "react";
import { useLocalization } from "@/hooks";
import { TFunction } from "@/types";

interface NavLink {
  label: string;
  href: string;
}

const navLinks = (t: TFunction): NavLink[] => [
  {
    label: t("home"),
    href: routes.home,
  },
  {
    label: t("store"),
    href: routes.store,
  },
  {
    label: t("coupon"),
    href: routes.coupon,
  },
  {
    label: t("category"),
    href: routes.category,
  },
  {
    label: t("about"),
    href: routes.about,
  },
];

interface NavLinksProps {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}

function NavLinks({ openMenu, setOpenMenu }: NavLinksProps) {
  const pathname = usePathname();
  const { t } = useLocalization({ namespace: "links" });
  const isActive = (href: string) => pathname === href;

  return (
    <div
      className={cn(
        "flex lg:items-center gap-y-3 gap-x-5 lg:flex-row flex-col max-lg:top-full max-lg:left-0 max-lg:absolute max-lg:w-full max-lg:bg-white max-lg:z-50 max-lg:opacity-0 transition-all duration-300 max-lg:invisible",
        openMenu &&
          "max-lg:border-t max-lg:p-4 max-lg:shadow-md max-lg:rounded-b-lg max-lg:opacity-100 max-lg:visible"
      )}
      onClick={() => setOpenMenu(false)}
    >
      {navLinks(t).map((link, index) => (
        <Fragment key={index}>
          <Link
            href={link.href}
            className={cn(
              "md:text-lg font-semibold max-lg:first:hidden",
              isActive(link.href) && "font-bold"
            )}
          >
            {link.label}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}

export default NavLinks;
