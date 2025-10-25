import { APIResponseMany } from "@/types";

// Coupon
export type Coupon = {
  _id: string;
  code: string;
  discount: number;
  discountType: "percentage" | "fixed";
  maxDiscountValue: number;
  validFrom: Date;
  validTo: Date;
  extraDetails: string[];
  isActive: boolean;
  createdAt: Date;
  store: {
    _id: string;
    name: string;
    logo: string;
    link: string;
  };
};

export type GetCouponsResponse = APIResponseMany<Coupon>;
