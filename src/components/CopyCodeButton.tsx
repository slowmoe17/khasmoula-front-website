"use client";

import { useState } from "react";
import { CopyIcon } from "./icons";
import { Button } from "./ui/button";
import CouponCopiedDialog from "./CouponCopiedDialog";
import { useLocalization } from "@/hooks";

interface CopyCodeButtonProps {
  code: string;
  link: string;
  onCopy: () => void;
}

function CopyCodeButton(props: CopyCodeButtonProps) {
  const { code, link, onCopy } = props;
  const { t: tComponents } = useLocalization({
    namespace: "components.couponCard",
  });
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    onCopy?.();
    setIsCopied(true);
  };

  const handleCloseDialog = () => {
    setIsCopied(false);
  };

  if (isCopied) {
    return <CouponCopiedDialog link={link} onClose={handleCloseDialog} />;
  }

  return (
    <Button
      onClick={handleCopy}
      className="text-[22px] h-12 w-full mt-5 group relative"
    >
      <div>
        <span className="absolute top-1/2 left-1/2 -translate-1/2 group-hover:opacity-0 opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
          <CopyIcon />
          {tComponents("copyCode")}
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-1/2 group-hover:opacity-100 opacity-0 transition-all duration-300 flex items-center justify-center gap-2">
          <CopyIcon />
          {code}
        </span>
      </div>
    </Button>
  );
}

export default CopyCodeButton;
