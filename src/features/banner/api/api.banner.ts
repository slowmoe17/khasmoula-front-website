import api from "@/lib/axios";
import { GetBannersResponse } from "../types";
import { APIFilters } from "@/types";

export const getBanners = async (
  apiFilters?: Omit<APIFilters, "search">
): Promise<GetBannersResponse> => {
  const res = await api.get("/banners", { params: apiFilters });
  return res.data;
};
