"use client";

import { routes } from "@/lib/route";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import { useLocalization } from "@/hooks";
import { Category } from "../types";

type CategoryCardProps = {
  category: Category & { coupons: number };
};

function CategoryCard({ category }: CategoryCardProps) {
  const { t: tCategoryCard } = useLocalization({
    namespace: "components.categoryCard",
  });
  return (
    <Link
      href={routes.categoryDetail(category._id)}
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
          {tCategoryCard("couponsCount", { couponsCount: category.coupons })}
        </p>
      </div>
    </Link>
  );
}

export default CategoryCard;
