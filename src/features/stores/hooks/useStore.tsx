import { useQuery } from "@tanstack/react-query";
import { getStore } from "../api/store.api";
import { APIFilters } from "@/types";

function useStore(id: string, filters?: APIFilters) {
  return useQuery({
    queryKey: ["store", id, filters],
    queryFn: () => getStore(id, filters),
    enabled: !!id,
  });
}

export { useStore };
