"use client";

import { CouponCard } from "@/components";
import HandleResponse from "@/components/HandleResponse";
import { useCoupons } from "@/features/coupon";
import { useLocalization } from "@/hooks";
import { useParams } from "next/navigation";
import { memo } from "react";

function MostUsed() {
  const { id } = useParams<{ id: string }>();
  const { t: tStoreDetail } = useLocalization({
    namespace: "storeDetail",
  });

  const { data: { data: coupons = [] } = {}, isLoading } = useCoupons({
    limit: 9,
    used: true,
    store: id,
  });

  if (!isLoading && coupons.length === 0) return;

  return (
    <section className="md:py-14 py-8">
      <h2 className="text-[28px] font-semibold max-sm:text-xl">
        {tStoreDetail("mostUsed.title")}
      </h2>

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
