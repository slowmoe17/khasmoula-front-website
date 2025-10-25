import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api";
import { APIFilters } from "@/types";

export const useCategories = (filters?: APIFilters) => {
  return useQuery({
    queryKey: ["categories", filters],
    queryFn: () => getCategories(filters),
  });
};
