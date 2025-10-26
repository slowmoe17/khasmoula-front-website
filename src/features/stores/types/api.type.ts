import { Coupon } from "@/features/coupon";
import { APIResponseMany, APIResponseMeta } from "@/types";

// Store
export type Store = {
  _id: string;
  name: string;
  logo: string;
  coverImage: string;
  link: string;
  maxCouponValue: number;
  couponsCount: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type GetStoresResponse = APIResponseMany<Store>;

export type GetStoreResponse = {
  meta: APIResponseMeta;
  store: Store;
  coupons: Omit<Coupon, "store">[];
};
