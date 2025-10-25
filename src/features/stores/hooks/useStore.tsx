import { useQuery } from "@tanstack/react-query";
import { getStore } from "../api/store.api";

function useStore(id: string) {
  return useQuery({
    queryKey: ["store", id],
    queryFn: () => getStore(id),
    enabled: !!id,
  });
}

export { useStore };
