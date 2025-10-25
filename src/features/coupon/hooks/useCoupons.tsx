import { APIFilters } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getCoupons } from "../api/coupon.api";

function useCoupons(filters?: APIFilters) {
  return useQuery({
    queryKey: ["coupons", filters],
    queryFn: () => getCoupons(filters),
  });
}

export { useCoupons };
