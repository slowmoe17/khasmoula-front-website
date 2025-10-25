import api from "@/lib/axios";
import { APIFilters } from "@/types";
import { GetCategoriesResponse, GetCategoryByIdResponse } from "../types";

export const getCategories = async (
  filters?: APIFilters
): Promise<GetCategoriesResponse> => {
  const res = await api.get("/category", { params: filters });
  return res.data;
};

export const getCategoryById = async (
  id: string,
  params?: APIFilters
): Promise<GetCategoryByIdResponse> => {
  const res = await api.get(`/category/${id}`, { params });
  return res.data;
};
