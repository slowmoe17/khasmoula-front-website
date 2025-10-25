import api from "@/lib/axios";
import { APIFilters } from "@/types";
import { GetStoresResponse, Store } from "../types";

export const getStores = async (
  filters?: APIFilters
): Promise<GetStoresResponse> => {
  const res = await api.get("/store", { params: filters });
  return res.data;
};

export const getStore = async (id: string): Promise<Store> => {
  const res = await api.get(`/store/${id}`);
  return res.data;
};
