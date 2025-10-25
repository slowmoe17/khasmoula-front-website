import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api";
import { APIFilters } from "@/types";

export const useCategories = (filters?: APIFilters, enabled?: boolean) => {
  return useQuery({
    queryKey: ["categories", filters],
    queryFn: () => getCategories(filters),
    enabled: enabled ?? true,
  });
};
