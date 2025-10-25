import { Container, CouponCard, Filters, StoreCard } from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coupon } from "@/features/coupon";
import { Store } from "@/features/stores";
import { getTranslations } from "next-intl/server";

async function Page() {
  const tFavoriteFilters = await getTranslations("favorite.filters");
  const tTabs = await getTranslations("components.tabs");

  return (
    <div className="pt-[70px] lg:pb-[205px] pb-[170px]">
      <Container>
        <Filters
          title={tFavoriteFilters("title")}
          placeholder={tFavoriteFilters("placeholder")}
        />

        <div className="mt-12">
          <Tabs defaultValue="coupons">
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
