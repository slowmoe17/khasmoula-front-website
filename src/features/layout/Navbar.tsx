"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components";
import { Actions, Logo, NavLinks } from "./navbarComponent";
import { cn } from "@/lib/utils";
import { usePathname } from "@/i18n/navigation";
import { routes } from "@/lib/route";
import { MenuIcon, XIcon } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === routes.home;

  const [openMenu, setOpenMenu] = useState(false);

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
        isScrolled ? "bg-white" : "bg-transparent",
        isHome && "fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      )}
    >
      <Container className="flex items-center justify-between min-h-[80px] lg:min-h-[100px] relative">
        <Logo />
        <NavLinks openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="flex items-center gap-x-5">
          <Actions />
          <button onClick={() => setOpenMenu(!openMenu)} className="lg:hidden">
            {openMenu ? (
              <XIcon className="w-6 h-6 text-primary" />
            ) : (
              <MenuIcon className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
