"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState, memo } from "react";
import { useLocalization } from "@/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useBanners } from "@/features/banner";
import HandleResponse from "@/components/HandleResponse";

function BannersSwiper() {
  const { direction } = useLocalization();

  const { data: { data: banners = [] } = {}, isLoading } = useBanners({
    isDeal: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction, watchDrag: false },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    const handler = () => onSelect();
    emblaApi.on("select", handler);
    return () => {
      emblaApi.off("select", handler);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <HandleResponse
      dataLength={banners.length}
      isLoading={isLoading}
      data="many"
    >
      <div className="relative">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {banners.map((banner, index) => (
              <div className="flex-[0_0_100%] h-[340px] relative" key={index}>
                <Image
                  src={banner.image}
                  alt={banner._id}
                  width={1343}
                  height={340}
                  className="w-full h-[340px] object-cover rounded-[10px]"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-7 absolute left-0 right-0 top-full z-10">
          {banners.map((_, idx) => (
            <button
              key={idx}
              className={`h-2.5 rounded-full border transition-all duration-200 ${
                selectedIndex === idx
                  ? "bg-primary w-[60px]"
                  : "bg-primary-light-active w-2.5"
              }`}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              type="button"
            ></button>
          ))}
        </div>
      </div>
    </HandleResponse>
  );
}

export default memo(BannersSwiper);
