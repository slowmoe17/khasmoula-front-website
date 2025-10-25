"use client";

import { Container, CouponCard, Filters, Pagination } from "@/components";
import HandleResponse from "@/components/HandleResponse";
import { useCoupons } from "@/features/coupon";
import { useLocalization, usePagination } from "@/hooks";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Page() {
  const { t: tCoupon } = useLocalization({
    namespace: "coupon.filters",
  });

  const { page, handlePageChange } = usePagination();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const {
    data: { meta = { total: 0, limit: 0, page: 1 }, data: coupons = [] } = {},
    isLoading,
  } = useCoupons({ page: search ? 1 : page, search });

  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] pb-[170px]">
      <Container>
        <Suspense>
          <Filters
            title={tCoupon("title")}
            placeholder={tCoupon("placeholder")}
          />
        </Suspense>

        <HandleResponse
          dataLength={coupons.length}
          isLoading={isLoading}
          data="many"
        >
          <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] sm:gap-x-5 gap-y-8 sm:gap-y-12 mt-6 sm:mt-9.5">
            {coupons.map((coupon) => (
              <CouponCard key={coupon._id} coupon={coupon} />
            ))}
          </div>

          <Pagination
            total={meta.total}
            limit={meta.limit}
            currentPage={meta.page}
            onPageChange={handlePageChange}
            className="mt-20"
          />
        </HandleResponse>
      </Container>
    </div>
  );
}

export default Page;
