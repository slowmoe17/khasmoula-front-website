"use client";

import { Button } from "@/components";
import { ChevronsDown } from "lucide-react";

function ShowMoreHeroSection({ title }: { title: string }) {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={handleScroll}
      className="bg-primary-light-active text-primary hover:bg-primary-hover md:px-7! px-5! md:py-6 py-4 md:text-[22px] text-lg font-semibold rounded-full md:mt-20 sm:mt-10 mt-8 h-14 gap-2"
    >
      <ChevronsDown className="size-6" /> {title}
    </Button>
  );
}

export default ShowMoreHeroSection;
