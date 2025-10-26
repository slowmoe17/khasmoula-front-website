import api from "@/lib/axios";
import { APIFilters } from "@/types";
import { GetStoreResponse, GetStoresResponse } from "../types";

export const getStores = async (
  filters?: APIFilters
): Promise<GetStoresResponse> => {
  const res = await api.get("/store", { params: filters });
  return res.data;
};

export const getStore = async (
  id: string,
  filters?: APIFilters
): Promise<GetStoreResponse> => {
  const res = await api.get(`/store/${id}`, { params: filters });
  return res.data;
};
