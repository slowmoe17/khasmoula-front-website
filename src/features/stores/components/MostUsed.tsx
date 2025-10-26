"use client";

import { CouponCard } from "@/components";
import HandleResponse from "@/components/HandleResponse";
import { useCoupons } from "@/features/coupon";
import { useParams } from "next/navigation";
import { memo, Suspense } from "react";

function MostUsed() {
  const { id } = useParams<{ id: string }>();

  const { data: { data: coupons = [] } = {}, isLoading } = useCoupons({
    limit: 9,
    used: true,
    store: id,
  });

  return (
    <section className="md:py-14 py-8">
      <Suspense>
        <h2 className="text-[28px] font-semibold max-sm:text-xl">
          الاكثر استخداما
        </h2>
      </Suspense>

      <HandleResponse
        dataLength={coupons.length}
        data="many"
        isLoading={isLoading}
      >
        <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] sm:gap-x-5 gap-y-8 sm:gap-y-12 mt-6 sm:mt-9.5">
          {coupons.map((coupon) => (
            <CouponCard key={coupon._id} coupon={coupon} />
          ))}
        </div>
      </HandleResponse>
    </section>
  );
}

export default memo(MostUsed);
