"use client";

import { Container, CouponCard, Filters, StoreCard } from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coupon } from "@/features/coupon";
import { Store } from "@/features/stores";
import { useLocalization } from "@/hooks";
import { useParams } from "next/navigation";
import { useState } from "react";

function Page() {
  const { id } = useParams();
  const { t: tTabs } = useLocalization({
    namespace: "components.tabs",
  });
  const { t: tCategoryDetailFilters } = useLocalization({
    namespace: "categoryDetail.filters",
  });

  const [tab, setTab] = useState("coupons");

  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] pb-[170px]">
      <Container>
        <Filters
          title="الموضة"
          placeholder={tCategoryDetailFilters("placeholder")}
          showInputSearch={tab === "stores"}
        />

        <div className="sm:mt-12 mt-6">
          <Tabs defaultValue={tab} onValueChange={setTab} dir="rtl">
            <TabsList className="flex items-center justify-center gap-5 w-fit mx-auto max-sm:flex-wrap">
              <TabsTrigger value="stores">{tTabs("stores")}</TabsTrigger>
              <TabsTrigger value="coupons">{tTabs("coupons")}</TabsTrigger>
            </TabsList>
            <TabsContent value="coupons">
              <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-5 mt-12">
                {Array.from({ length: 10 }).map((_, index) => (
                  <CouponCard key={index} coupon={{} as Coupon} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="stores">
              <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-5 mt-12">
                {Array.from({ length: 10 }).map((_, index) => (
                  <StoreCard key={index} store={{} as Store} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}

export default Page;
