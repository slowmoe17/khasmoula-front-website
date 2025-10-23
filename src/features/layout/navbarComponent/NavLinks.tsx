"use client";

import { routes } from "@/lib/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  {
    label: "الرئيسيه",
    href: routes.home,
  },
  {
    label: "المتاجر",
    href: routes.store,
  },
  {
    label: "الكوبونات",
    href: routes.coupons,
  },
  {
    label: "الاقسام",
    href: routes.categories,
  },
  {
    label: "من نحن",
    href: routes.about,
  },
];

function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  return (
    <div className="flex items-center gap-5">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            "text-lg font-semibold",
            isActive(link.href) && "font-bold"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
