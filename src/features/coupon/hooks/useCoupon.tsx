import { useQuery } from "@tanstack/react-query";
import { getCoupon } from "../api/coupon.api";

function useCoupon(id: string) {
  return useQuery({
    queryKey: ["coupon", id],
    queryFn: () => getCoupon(id),
    enabled: !!id,
  });
}

export { useCoupon };
