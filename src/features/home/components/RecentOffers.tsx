"use client";

import { Container } from "@/components";
import HandleResponse from "@/components/HandleResponse";
import { Banner, useBanners } from "@/features/banner";
import { useLocalization } from "@/hooks";
import Image from "next/image";
import React, { useMemo } from "react";

function RecentOffers() {
  const { t: tHome } = useLocalization({
    namespace: "home.recentOffers",
  });
  const { data: { data: banners = [] } = {}, isLoading } = useBanners({
    isDeal: true,
  });

  const bannersChunk = useMemo(() => {
    return isLoading && banners.length > 0
      ? [banners]
      : banners.reduce<Banner[][]>((acc, _, i) => {
          if (i % 3 === 0) acc.push(banners.slice(i, i + 3));
          return acc;
        }, []);
  }, [banners, isLoading]);

  return (
    <section className="md:py-14 py-8 max-md:grid max-md:h-screen">
      <HandleResponse
        dataLength={banners.length}
        isLoading={isLoading}
        data="many"
      >
        <Container className="max-md:flex max-md:flex-col max-md:gap-y-6">
          <h2 className="md:text-3xl text-2xl">{tHome("title")}</h2>

          {bannersChunk.map((group, index) => (
            <React.Fragment key={index}>
              <div className="grid md:grid-cols-7 md:grid-rows-10 grid-rows-12 gap-4 md:h-[690px] max-md:flex-1 md:mt-12">
                <div className="md:col-span-4 md:row-span-5 row-span-4 md:col-start-4 md:row-start-1 relative">
                  <Image
                    src={group[0].image}
                    alt={"offer"}
                    fill
                    className="object-cover rounded-[10px]"
                  />
                </div>
                <div className="md:col-span-4 md:row-span-5 row-span-4 md:col-start-4 md:row-start-6 relative">
                  <Image
                    src={group[1].image}
                    alt={"offer"}
                    fill
                    className="object-cover rounded-[10px]"
                  />
                </div>
                <div className="md:col-span-3 md:row-span-10 row-span-4 md:col-start-1 md:row-start-1 relative">
                  <Image
                    src={group[2].image}
                    alt="offer"
                    fill
                    className="object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </Container>
      </HandleResponse>
    </section>
  );
}

export default RecentOffers;
