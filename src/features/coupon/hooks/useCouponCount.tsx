import { couponCount } from "@/features/coupon";
import { useMutation } from "@tanstack/react-query";

function useCouponCount() {
  return useMutation({
    mutationFn: (id: string) => couponCount(id),
  });
}

export { useCouponCount };
