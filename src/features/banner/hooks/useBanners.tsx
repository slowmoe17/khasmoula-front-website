import { APIFilters } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../api";

function useBanners(filters?: Omit<APIFilters, "search">) {
  return useQuery({
    queryKey: ["banners", filters],
    queryFn: () => getBanners(filters),
  });
}

export { useBanners };
