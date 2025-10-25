"use client";

import HandleResponse from "@/components/HandleResponse";
import { useStores } from "@/features/stores";
import { useLocalization } from "@/hooks";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

function StoreMarquee() {
  const { t: tHome, direction } = useLocalization({
    namespace: "home.storeMarquee",
  });

  const { data: { data: stores = [] } = {}, isLoading } = useStores({
    limit: false,
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
      <HandleResponse
        dataLength={stores.length}
        isLoading={isLoading}
        data="many"
      >
        <h2 className="md:text-3xl text-2xl text-center">{tHome("title")}</h2>

        <div className="flex items-center justify-center">
          <div className="embla relative overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {stores.map((store) => (
                <div
                  className="embla__slide flex-[0_0_auto] px-4 py-6 max-w-[130px] md:max-w-[170px]"
                  key={store._id}
                >
                  <Image
                    src={store.logo}
                    alt={store.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </HandleResponse>
    </section>
  );
}

export default StoreMarquee;
