"use client";

import {
  Container,
  CouponCard,
  Filters,
  LoadingFullScreen,
  Pagination,
  TitlePage,
} from "@/components";
import HandleResponse from "@/components/HandleResponse";
import { BannersSwiper, MostUsed, useStore } from "@/features/stores";
import { useFilters, useLocalization, useShareRedirect } from "@/hooks";
import { useParams } from "next/navigation";

function Page() {
  const { t: tStoreDetail } = useLocalization({
    namespace: "storeDetail",
  });

  // TODO: Detect Open in App
  const { isLoading: isShareRedirectLoading } = useShareRedirect();

  const { id } = useParams<{ id: string }>();

  const { page, handlePageChange, getAllSearchParams } = useFilters();

  const selectedFilters = getAllSearchParams();

  const {
    data: { store, coupons = [], meta = { total: 0, limit: 0, page: 1 } } = {},
    isPending,
  } = useStore(isShareRedirectLoading ? "" : id, { ...selectedFilters, page });

  if (isShareRedirectLoading) return <LoadingFullScreen />;

  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] pb-[170px]">
      <Container>
        <TitlePage title={store?.name || ""} className="text-[32px]" />

        <div className="mt-12 space-y-12">
          <BannersSwiper />

          <MostUsed />

          <section className="md:py-14 py-8">
            <Filters
              title={tStoreDetail("filters.title")}
              placeholder={tStoreDetail("filters.placeholder")}
              filterType="coupon"
              showInputSearch={false}
              scroll={false}
            />
            <HandleResponse
              dataLength={coupons.length}
              isLoading={isPending}
              data="many"
            >
              <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] sm:gap-x-5 gap-y-8 sm:gap-y-12 mt-6 sm:mt-9.5">
                {coupons.map((coupon) => (
                  <CouponCard
                    key={coupon._id}
                    coupon={{
                      ...coupon,
                      store: {
                        _id: store?._id || "",
                        name: store?.name || "",
                        logo: store?.logo || "",
                        link: store?.link || "",
                      },
                    }}
                  />
                ))}
              </div>

              <Pagination
                total={meta?.total || 0}
                limit={meta?.limit || 0}
                currentPage={meta?.page || 1}
                onPageChange={(page) => {
                  handlePageChange(page);
                }}
                className="mt-20"
              />
            </HandleResponse>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default Page;
