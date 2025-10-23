"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components";
import { Actions, Logo, NavLinks } from "./navbarComponent";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/route";

function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === routes.home;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isHome) return;
      if (window.scrollY > 60) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome ? "bg-white" : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between h-[100px]">
        <Logo />
        <NavLinks />
        <Actions />
      </Container>
    </nav>
  );
}

export default Navbar;
