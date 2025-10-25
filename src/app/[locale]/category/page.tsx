"use client";

import { Container, Pagination, TitlePage } from "@/components";
import HandleResponse from "@/components/HandleResponse";
import { CategoryCard, useCategories } from "@/features/category";
import { useFilters, useLocalization } from "@/hooks";

function Page() {
  const { t: tCategoryTitle } = useLocalization({
    namespace: "category",
  });

  const { page, handlePageChange } = useFilters();

  const {
    data: {
      meta = { total: 0, limit: 0, page: 1 },
      data: categories = [],
    } = {},
    isLoading,
  } = useCategories({ page });

  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] pb-[170px]">
      <Container>
        <TitlePage title={tCategoryTitle("title")} className="text-[32px]" />

        <div className="sm:mt-12 mt-6">
          <HandleResponse
            dataLength={categories.length}
            isLoading={isLoading}
            data="many"
          >
            <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-x-5 md:gap-y-12 sm:gap-y-8 gap-y-6">
              {categories.map((category) => (
                <CategoryCard key={category._id} category={category} />
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
        </div>
      </Container>
    </div>
  );
}

export default Page;
