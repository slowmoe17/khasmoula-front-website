import { APIResponseMany } from "@/types";

export type Category = {
  _id: string;
  name: string;
  image: string;
};

export type GetCategoriesResponse = APIResponseMany<
  Category & { coupons: number }
>;
