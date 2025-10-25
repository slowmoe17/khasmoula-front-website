import { APIResponseMany } from "@/types";

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
