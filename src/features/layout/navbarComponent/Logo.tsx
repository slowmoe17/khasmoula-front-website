import { routes } from "@/lib/route";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={routes.home}>
      <Image
        src="/logo.png"
        alt="logo"
        width={68}
        height={73}
        // quality={100}
        priority
        className="object-contain"
      />
    </Link>
  );
}

export default Logo;
