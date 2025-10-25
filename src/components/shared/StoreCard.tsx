"use client";

import { routes } from "@/lib/route";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { Button } from "../ui";
import BookmarkButton from "./BookmarkButton";
import { useLocalization } from "@/hooks";
import { Store } from "@/features/stores";
import { cn } from "@/lib/utils";

interface StoreCardProps {
  store: Store;
}

function StoreCard(props: StoreCardProps) {
  const { store } = props;
  const { t: tStoreCard, isArabic } = useLocalization({
    namespace: "components.storeCard",
  });

  return (
    <div className="bg-white pt-5 rounded-[10px] shadow-[0px_0px_3px_0px_#00000040] flex flex-col">
      <div className="flex items-center justify-between">
        <div className="ms-5">
          <BookmarkButton item={store} type="store" />
        </div>

        <div
          className={cn(
            "w-[115px] h-9.5 flex items-center justify-center bg-primary-light mt-[5px] text-primary",
            !isArabic
              ? "rounded-tl-[50px] rounded-bl-[50px]"
              : "rounded-tr-[50px] rounded-br-[50px]"
          )}
        >
          {tStoreCard("mostUsed")}
        </div>
      </div>

      <div className="flex items-center justify-start flex-col -mt-[15px] flex-1">
        <Image
          src={store.logo}
          alt={store.name}
          width={140}
          height={140}
          className="rounded-[10px]"
        />
        <h3 className="text-xl font-semibold mt-5">{store.name}</h3>
        <p className="text-center text-[22px] font-semibold">
          {tStoreCard("description", { discount: store.maxCouponValue })}
        </p>
        <p className="text-center text-xl text-[#999999] sm:mt-7 mt-5">
          {tStoreCard("couponsCount", { couponsCount: store.couponsCount })}
        </p>
        <div className="flex items-end flex-1 justify-center gap-5 sm:mt-9.5 mt-6 px-9 pb-7 max-sm:flex-wrap">
          <Button className="sm:w-1/2 w-full font-semibold text-xl py-[17px] px-5 h-12 text-white">
            <Link
              href={{
                pathname: routes.coupon,
                query: { store: store._id },
              }}
            >
              {tStoreCard("showCoupons")}
            </Link>
          </Button>
          <Button
            variant="outline"
            className="sm:w-1/2 w-full font-semibold text-xl py-[17px] px-5 h-12 text-primary border-primary"
          >
            <Link href={routes.storeDetail(store._id)}>
              {tStoreCard("showStore")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
