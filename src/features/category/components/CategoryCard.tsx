"use client";

import { useLocalization } from "@/hooks";
import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/route";
import Image from "next/image";
import { Category } from "../types";

type CategoryCardProps = {
  category: Category & { stores: number };
};

function CategoryCard({ category }: CategoryCardProps) {
  const { t: tCategoryCard } = useLocalization({
    namespace: "components.categoryCard",
  });
  return (
    <Link
      href={
        category.stores > 0
          ? routes.categoryDetail(category._id)
          : routes.coupon
      }
      className="bg-white rounded-[10px] p-5 shadow-[0px_0px_4px_0px_#00000036] flex items-center gap-5"
    >
      <div className="w-[60px] h-[60px] rounded-full bg-[#54982536] flex items-center justify-center">
        <Image
          src={category.image}
          alt={category.name}
          width={30}
          height={30}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl">{category.name}</h3>
        <p className="text-lg text-[#999999]">
          {tCategoryCard("storesCount", { storesCount: category.stores })}
        </p>
      </div>
    </Link>
  );
}

export default CategoryCard;
