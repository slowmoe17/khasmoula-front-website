"use client";

import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    number: "1000+",
    text: "كوبون خصم",
  },
  {
    number: "500+",
    text: "متجر",
  },
  {
    number: "24H",
    text: "دعم فني",
  },
];

function StatsHeroEmbla() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      direction: "rtl",
      watchDrag: false,
    },
    [
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="h-[200px] overflow-hidden text-white relative">
      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex flex-col h-full">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex shrink-0 w-full h-full items-center justify-center"
              key={index}
            >
              <div className="text-center">
                <p className="text-5xl font-bold">{slide.number}</p>
                <p className="text-2xl mt-8">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Bullets */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            // onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-auto ${
              index === selectedIndex ? "bg-[#D9B32B]" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default StatsHeroEmbla;
