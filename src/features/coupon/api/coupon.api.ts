import api from "@/lib/axios";
import { APIFilters, APIResponseMessage } from "@/types";
import { Coupon, GetCouponsResponse } from "../types";

export const getCoupons = async (
  filters?: APIFilters
): Promise<GetCouponsResponse> => {
  const res = await api.get("/coupon", { params: filters });
  return res.data;
};

export const getCoupon = async (id: string): Promise<Coupon> => {
  const res = await api.get(`/coupon/${id}`);
  return res.data;
};

export const couponCount = async (id: string): Promise<APIResponseMessage> => {
  const res = await api.post(`/coupon/${id}`);
  return res.data;
};
