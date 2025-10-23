"use client";

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
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: "ltr" }, [
    AutoScroll({
      playOnInit: true,
      speed: 1.5,
    }),
  ]);

  return (
    <section className="space-y-12 py-14" dir="ltr">
      <h2 className="text-3xl text-center">يوجد لدينا اكواد +50 متجر</h2>

      <div className="flex items-center justify-center">
        <div className="embla relative overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {logos.map((logo, index) => (
              <div
                className="embla__slide flex-[0_0_auto] px-4 py-6 max-w-[170px]"
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
