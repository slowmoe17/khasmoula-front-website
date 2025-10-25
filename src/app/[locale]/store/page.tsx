"use client";

import { Container, Filters, Pagination, StoreCard } from "@/components";
import HandleResponse from "@/components/HandleResponse";
import { useStores } from "@/features/stores/hooks";
import { useFilters, useLocalization } from "@/hooks";
import { Suspense, useMemo } from "react";

function Page() {
  const { t: tStore } = useLocalization({
    namespace: "store.filters",
  });

  const { page, handlePageChange, getSearchParam, getAllSearchParams } =
    useFilters();

  const search = getSearchParam("search") || "";

  const {
    data: { meta = { total: 0, limit: 20, page: 1 }, data: stores = [] } = {},
    isLoading,
  } = useStores({ page, search });

  const selectedFilters = getAllSearchParams();

  const sortedStores = useMemo(() => {
    // ننسخ المصفوفة لتجنب تعديل الأصل
    const sorted = [...stores];

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
  }, [stores, selectedFilters]);

  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] pb-[170px]">
      <Container>
        <Suspense>
          <Filters
            title={tStore("title")}
            placeholder={tStore("placeholder")}
            filterType="store"
          />
        </Suspense>

        <HandleResponse
          dataLength={stores.length}
          isLoading={isLoading}
          data="many"
        >
          <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] sm:gap-x-5 gap-y-8 sm:gap-y-12 mt-6 sm:mt-9.5">
            {sortedStores.map((store) => (
              <StoreCard key={store._id} store={store} />
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
