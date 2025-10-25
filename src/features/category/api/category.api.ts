import api from "@/lib/axios";
import { GetCategoriesResponse } from "../types";
import { APIFilters } from "@/types";

export const getCategories = async (
  filters?: APIFilters
): Promise<GetCategoriesResponse> => {
  const res = await api.get("/category", { params: filters });
  return res.data;
};
