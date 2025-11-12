"use client";

import {
  Container,
  CouponCard,
  Filters,
  Pagination,
  StoreCard,
} from "@/components";
import HandleResponse from "@/components/HandleResponse";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useCategory from "@/features/category/hooks/useCategory";
import { Coupon } from "@/features/coupon";
import { Store } from "@/features/stores";
import { useFilters, useLocalization } from "@/hooks";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

function Page() {
  const { id } = useParams();
  const { t: tTabs } = useLocalization({
    namespace: "components.tabs",
  });
  const { t: tCategoryDetailFilters } = useLocalization({
    namespace: "categoryDetail.filters",
  });

  const { handlePageChange, getAllSearchParams } = useFilters();
  const selectedFilters = getAllSearchParams();

  const [tab, setTab] = useState("coupons");

  const {
    data: { meta = { total: 0, limit: 0, page: 1 }, category, data = [] } = {},
    isLoading,
    isPending,
  } = useCategory(id as string, {
    limit: 20,
    type: tab,
    ...selectedFilters,
  });

  const sortedStores =
    useMemo(() => {
      if (tab === "coupons") return;
      // ننسخ المصفوفة لتجنب تعديل الأصل
      const sorted = [...data] as Store[];

      // 1️⃣ الفرز بالاسم
      if (selectedFilters.name) {
        sorted.sort((a, b) => {
          if (selectedFilters.name === "asc") {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
      }

      // 2️⃣ الفرز بعدد الكوبونات (لو مطلوب)
      if (selectedFilters.couponsCount) {
        sorted.sort((a, b) => {
          if (selectedFilters.couponsCount === "asc") {
            return a.couponsCount - b.couponsCount;
          } else {
            return b.couponsCount - a.couponsCount;
          }
        });
      }

      return sorted;
    }, [data, selectedFilters, tab]) || [];

  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] pb-[170px]">
      <Container>
        <Filters
          title={category?.name || ""}
          placeholder={tCategoryDetailFilters("placeholder")}
          showInputSearch={tab === "stores"}
          filterType={tab === "stores" ? "store" : "coupon"}
        />

        <div className="sm:mt-12 mt-6">
          <Tabs defaultValue={tab} onValueChange={setTab}>
            <TabsList className="flex items-center justify-center gap-5 w-fit mx-auto max-sm:flex-wrap">
              <TabsTrigger value="stores">{tTabs("stores")}</TabsTrigger>
              <TabsTrigger value="coupons">{tTabs("coupons")}</TabsTrigger>
            </TabsList>
            <HandleResponse
              dataLength={data.length}
              isLoading={isLoading || isPending}
              data="many"
            >
              <TabsContent value="coupons">
                <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-5 mt-12">
                  {data.map((coupon) => (
                    <CouponCard key={coupon._id} coupon={coupon as Coupon} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="stores">
                <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-5 mt-12">
                  {sortedStores.map((store) => (
                    <StoreCard key={store._id} store={store as Store} />
                  ))}
                </div>
              </TabsContent>
            </HandleResponse>
          </Tabs>

          <Pagination
            total={meta.total}
            limit={meta.limit}
            currentPage={meta.page}
            onPageChange={handlePageChange}
            className="mt-20"
          />
        </div>
      </Container>
    </div>
  );
}

export default Page;
