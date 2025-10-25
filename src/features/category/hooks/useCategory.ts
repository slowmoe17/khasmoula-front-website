import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../api/category.api";
import { APIFilters } from "@/types";

function useCategory(id: string, params?: APIFilters) {
  return useQuery({
    queryKey: ["category", id, params],
    queryFn: () => getCategoryById(id, params),
    enabled: !!id,
  });
}

export default useCategory;
