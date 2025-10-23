import React from "react";
import { Button } from "@/components";
import Link from "next/link";
import { routes } from "@/lib/route";
import { BookmarkIcon } from "@/components/icons";

function Actions() {
  return (
    <div className="flex items-center gap-7">
      <Button
        variant="default"
        className="font-bold px-4 rounded-full h-10.5 w-32"
        asChild
      >
        <Link href={routes.contact}>تواصل معنا</Link>
      </Button>

      <Link href={routes.bookmarked} className="relative">
        <BookmarkIcon className="w-6 h-6 text-primary" />

        <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
          1
        </span>
      </Link>
    </div>
  );
}

export default Actions;
