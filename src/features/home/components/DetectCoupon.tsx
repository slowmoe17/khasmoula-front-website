"use client";

import { CouponCard } from "@/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCoupon } from "@/features/coupon";
import { useRouter } from "@/i18n/navigation";
import { routes } from "@/lib/route";
import { Loader2Icon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function DetectCoupon() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const couponId = searchParams.get("coupon");

  const { data: coupon, isLoading } = useCoupon(couponId || "");

  const [open, setOpen] = useState(!!couponId);
  useEffect(() => {
    if (!couponId && !isLoading && !coupon) {
      setTimeout(() => {
        router.replace({
          pathname: routes.home,
        });
        setOpen(false);
      }, 3000);
    }
  }, [couponId, router, isLoading, coupon]);

  const handleClose = useCallback(
    (open: boolean) => {
      if (!open) {
        setOpen(false);
        router.replace({
          pathname: routes.home,
        });
      }
    },
    [router]
  );

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent showCloseButton={false}>
        <DialogTitle className="hidden">Detect Coupon</DialogTitle>
        <DialogDescription className="hidden">Detect Coupon</DialogDescription>

        {isLoading || !coupon ? (
          <div className="flex items-center justify-center h-32">
            <Loader2Icon className="w-10 h-10 animate-spin" />
          </div>
        ) : (
          <CouponCard coupon={coupon} />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default DetectCoupon;
