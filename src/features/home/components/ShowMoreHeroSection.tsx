"use client";

import { Button } from "@/components";
import { ChevronsDown } from "lucide-react";

function ShowMoreHeroSection() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={handleScroll}
      className="bg-primary-light-active text-primary hover:bg-primary-hover px-7! py-6 text-[22px] font-semibold rounded-full md:mt-20 mt-10 h-14 gap-2"
    >
      <ChevronsDown className="size-6" /> استكشف اكتر
    </Button>
  );
}

export default ShowMoreHeroSection;
