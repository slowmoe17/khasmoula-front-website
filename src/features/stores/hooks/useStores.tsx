import { APIFilters } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getStores } from "../api/store.api";

function useStores(filters?: APIFilters) {
  return useQuery({
    queryKey: ["stores", filters],
    queryFn: () => getStores(filters),
  });
}

export { useStores };
