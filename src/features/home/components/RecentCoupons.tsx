"use client";

import { Container, CouponCard } from "@/components";
import { routes } from "@/lib/route";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useCallback } from "react";
import { useLocalization } from "@/hooks";
import { cn } from "@/lib/utils";

// Dummy data for demonstration; replace with real data as needed
const RECENT_COUPONS = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

function RecentCoupons() {
  const { t: tHome, direction } = useLocalization({
    namespace: "home.recentCoupons",
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    direction,
    watchDrag: false,
  });
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return;

  // return (
  //   <section className="md:py-14 py-8">
  //     <Container>
  //       <div className="flex flex-col">
  //         <div className="flex items-center justify-between">
  //           <div className="flex items-center md:gap-2.5 gap-2">
  //             <h2 className="md:text-3xl text-2xl">{tHome("title")}</h2>
  //             <Image
  //               src="/hot.svg"
  //               alt="hot"
  //               width={48}
  //               height={48}
  //               className="md:block hidden"
  //             />
  //           </div>

  //           <Link
  //             className="md:text-2xl text-lg font-bold text-primary flex items-center md:gap-4 gap-2"
  //             href={routes.coupon}
  //           >
  //             {tHome("showMore")}
  //             {direction === "rtl" ? (
  //               <ChevronLeft className="size-7" />
  //             ) : (
  //               <ChevronRight className="size-7" />
  //             )}
  //           </Link>
  //         </div>

  //         {/* Carousel viewport */}
  //         <div className="relative md:mt-12 mt-6">
  //           <div className="embla overflow-hidden h-full" ref={emblaRef}>
  //             <div className="embla__container flex gap-6">
  //               {RECENT_COUPONS.map((coupon) => (
  //                 <div
  //                   className="embla__slide shrink-0 sm:max-w-[420px] max-w-fit"
  //                   key={coupon.id}
  //                 >
  //                   {/* Pass real coupon data as props to CouponCard */}
  //                   <CouponCard />
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //           {/* Arrow Navigation */}

  //           <button
  //             className={cn(
  //               "absolute top-1/2 -translate-y-1/2 bg-white w-[60px] h-[60px] flex items-center justify-center shadow-[0px_0px_4px_0px_#00000026] rounded-full z-10 hover:bg-primary/10 transition group",
  //               direction === "rtl"
  //                 ? "md:-right-[30px] right-0"
  //                 : "md:-left-[30px] left-0"
  //             )}
  //             type="button"
  //             aria-label="السابق"
  //             onClick={scrollPrev}
  //           >
  //             {direction === "rtl" ? (
  //               <ChevronRight className="size-8 text-black group-hover:text-primary transition" />
  //             ) : (
  //               <ChevronLeft className="size-8 text-black group-hover:text-primary transition" />
  //             )}
  //           </button>

  //           <button
  //             className={cn(
  //               "absolute top-1/2 -translate-y-1/2 bg-white w-[60px] h-[60px] flex items-center justify-center shadow-[0px_0px_4px_0px_#00000026] rounded-full z-10 hover:bg-primary/10 transition group",
  //               direction === "rtl"
  //                 ? "md:-left-[30px] left-0"
  //                 : "md:-right-[30px] right-0"
  //             )}
  //             type="button"
  //             aria-label="التالي"
  //             onClick={scrollNext}
  //           >
  //             {direction === "rtl" ? (
  //               <ChevronLeft className="size-8 text-black group-hover:text-primary transition" />
  //             ) : (
  //               <ChevronRight className="size-8 text-black group-hover:text-primary transition" />
  //             )}
  //           </button>
  //         </div>
  //       </div>
  //     </Container>
  //   </section>
  // );
}

export default RecentCoupons;
