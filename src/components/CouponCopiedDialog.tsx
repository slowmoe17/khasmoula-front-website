"use client";

import Image from "next/image";
import { Button } from "./ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useCallback } from "react";
import { useLocalization } from "@/hooks";

interface CouponCopiedDialogProps {
  link: string;
  onClose: () => void;
}

function CouponCopiedDialog(props: CouponCopiedDialogProps) {
  const { link, onClose } = props;
  const { t: tComponents } = useLocalization({
    namespace: "components.couponCard",
  });
  const handleClose = useCallback(
    (open: boolean) => {
      if (!open) {
        onClose();
      }
    },
    [onClose]
  );

  const handleGoToLink = useCallback(() => {
    handleClose(false);
  }, [handleClose]);

  return (
    <Dialog onOpenChange={handleClose} defaultOpen={true}>
      <DialogContent
        className="sm:min-w-[560px] md:p-[34px]"
        showCloseButton={false}
      >
        <DialogHeader>
          <Image
            src="/done.png"
            alt="done"
            width={240}
            height={240}
            className="mx-auto"
          />
          <DialogTitle className="font-semibold text-center text-[32px]">
            {tComponents("copied")}
          </DialogTitle>
          <DialogDescription className="text-center text-2xl text-[#737373] font-semibold mt-7">
            {tComponents("useCode")}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex items-center justify-center gap-4 mt-12">
          <Button
            onClick={onClose}
            className="w-1/2 h-[58px] text-2xl font-normal"
          >
            {tComponents("close")}
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="w-1/2 h-[58px] text-2xl font-normal"
            asChild
          >
            <a href={link} target="_blank" onClick={handleGoToLink}>
              <span>{tComponents("goToLink")}</span>
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CouponCopiedDialog;
