"use client";

import { Coupon } from "@/features/coupon";
import { useLocalization } from "@/hooks";
import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/route";
import Image from "next/image";
import CopyCodeButton from "../CopyCodeButton";
import BookmarkButton from "./BookmarkButton";
import ShareButton from "./ShareButton";

function CouponCard(props: { coupon: Coupon }) {
  const { coupon } = props;
  const { t: tComponents } = useLocalization({
    namespace: "components.couponCard",
  });

  return (
    <div className="bg-primary-light-active border border-[#999999B2] rounded-[10px] pb-8 max-md:overflow-hidden">
      <div className="md:px-5 px-3 md:pt-5 pt-3 flex items-center justify-between">
        <BookmarkButton />
        <ShareButton _id={coupon._id} />
      </div>
      <div className="md:mt-5.5 mt-2">
        <Link href={routes.storeDetail(coupon.store._id)}>
          <Image
            src={coupon.store.logo}
            alt={coupon.store.name}
            width={260}
            height={93}
            className="mx-auto md:max-w-[260px] max-w-[180px] max-h-[140px] object-contain rounded-[10px]"
          />
        </Link>
        <div className="mt-7 px-[60px]">
          <h3 className="text-center text-[28px] font-semibold ">
            {tComponents("title", {
              discount: coupon.discount,
              store: coupon.store.name,
            })}
          </h3>
          <p className="text-center text-xl mt-7">
            {tComponents("description", {
              discount: coupon.discount,
              store: coupon.store.name,
            })}
          </p>
        </div>

        <div className="mt-8 md:h-[60px] h-[40px] flex items-center justify-center relative">
          <div className="dashed-box w-full" />

          <div className="w-[60px] h-[60px] bg-background rounded-full absolute top-1/2 -translate-y-1/2 -left-[30px]" />
          <div className="w-[60px] h-[60px] bg-background rounded-full absolute top-1/2 -translate-y-1/2 -right-[30px]" />
        </div>

        <div className="px-9.5">
          <CopyCodeButton code={coupon.code} link={coupon.store.link} />
        </div>
      </div>
    </div>
  );
}

export default CouponCard;
