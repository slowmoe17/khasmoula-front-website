"use client";

import { Container, Filters, Pagination, StoreCard } from "@/components";
import HandleResponse from "@/components/HandleResponse";
import { useStores } from "@/features/stores/hooks";
import { useLocalization, usePagination } from "@/hooks";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Page() {
  const { t: tStore } = useLocalization({
    namespace: "store.filters",
  });

  const { page, handlePageChange } = usePagination();

  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const {
    data: { meta = { total: 0, limit: 20, page: 1 }, data: stores = [] } = {},
    isLoading,
  } = useStores({ page, search });

  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] pb-[170px]">
      <Container>
        <Suspense>
          <Filters
            title={tStore("title")}
            placeholder={tStore("placeholder")}
          />
        </Suspense>

        <HandleResponse
          dataLength={stores.length}
          isLoading={isLoading}
          data="many"
        >
          <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] sm:gap-x-5 gap-y-8 sm:gap-y-12 mt-6 sm:mt-9.5">
            {stores.map((store) => (
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
