"use client";

import { useLocalization } from "@/hooks";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const logos = [
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
  "/noon.png",
];

function StoreMarquee() {
  const { t: tHome, direction } = useLocalization({
    namespace: "home.storeMarquee",
  });

  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction, watchDrag: false },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1.5,
      }),
    ]
  );

  return (
    <section className="md:space-y-12 space-y-6 md:py-14 py-8" dir={direction}>
      <h2 className="md:text-3xl text-2xl text-center">{tHome("title")}</h2>

      <div className="flex items-center justify-center">
        <div className="embla relative overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {logos.map((logo, index) => (
              <div
                className="embla__slide flex-[0_0_auto] px-4 py-6 max-w-[130px] md:max-w-[170px]"
                key={index}
              >
                <Image
                  src={logo}
                  alt={`logo-${index}`}
                  width={120}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreMarquee;
