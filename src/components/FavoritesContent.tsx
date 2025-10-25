"use client";

import { CouponCard, StoreCard } from "@/components/shared";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coupon } from "@/features/coupon";
import { Store } from "@/features/stores";
import { useLocalization } from "@/hooks";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface FavoritesContentProps {
  tabs: {
    stores: string;
    coupons: string;
  };
}

export default function FavoritesContent({ tabs }: FavoritesContentProps) {
  const [tab, setTab] = useState("coupons");
  const searchParams = useSearchParams();
  const { t: tNoFavorites } = useLocalization({
    namespace: "favorite.noFavorites",
  });
  const { getCoupons, getStores, loading } = useFavoritesContext();
  const coupons = getCoupons();
  const stores = getStores();

  const search = searchParams.get("search") || "";

  let searchData: Coupon[] | Store[] = tab === "coupons" ? coupons : stores;
  if (search) {
    if (tab === "coupons") {
      searchData = coupons.filter((coupon) =>
        coupon.store.name.includes(search)
      );
    } else {
      searchData = stores.filter((store) => store.name.includes(search));
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading favorites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <Tabs defaultValue={tab} onValueChange={setTab}>
        <TabsList className="flex items-center justify-center gap-5 w-fit mx-auto max-sm:flex-wrap">
          <TabsTrigger value="stores">
            {tabs.stores} ({stores.length})
          </TabsTrigger>
          <TabsTrigger value="coupons">
            {tabs.coupons} ({coupons.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="coupons">
          {searchData.length > 0 ? (
            <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-5 mt-12">
              {searchData.map((coupon) => (
                <CouponCard key={coupon._id} coupon={coupon as Coupon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{tNoFavorites("title")}</p>
              <p className="text-gray-500 text-sm mt-2">
                {tNoFavorites("description")}
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="stores">
          {searchData.length > 0 ? (
            <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-5 mt-12">
              {searchData.map((store) => (
                <StoreCard key={store._id} store={store as Store} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{tNoFavorites("title")}</p>
              <p className="text-gray-500 text-sm mt-2">
                {tNoFavorites("description")}
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
