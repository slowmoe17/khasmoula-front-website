import { Coupon } from "@/features/coupon";
import { Store } from "@/features/stores";
import { APIResponseMany, APIResponseMeta } from "@/types";

export type Category = {
  _id: string;
  name: string;
  image: string;
};

export type GetCategoriesResponse = APIResponseMany<
  Category & { coupons: number }
>;

export type GetCategoryByIdResponse = {
  meta: APIResponseMeta;
  category: Category;
  data: Coupon[] | Store[];
};
