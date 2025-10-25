import { useState } from "react";
import { useLocalization } from "@/hooks";
import { routes } from "@/lib/route";
import { cn } from "@/lib/utils";
import { ShareIcon } from "../icons";

interface ShareButtonProps {
  _id: string;
}

function ShareButton({ _id }: ShareButtonProps) {
  const { direction, t: tComponents } = useLocalization({
    namespace: "components.couponCard.share",
  });
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (isSharing) return;

    const shareUrl = `${window.location.origin}${routes.couponDetail(_id)}`;
    console.log("🔗 Share URL:", shareUrl);

    try {
      setIsSharing(true);

      if (navigator.share) {
        console.log("📱 Using native share");
        await navigator.share({
          title: tComponents("title"),
          url: shareUrl,
        });
        console.log("✅ Share completed");
      } else {
        console.log("💻 Using clipboard fallback");
        await navigator.clipboard.writeText(shareUrl);
      }
    } catch (error) {
      console.error("❌ Share failed:", error);
    } finally {
      setTimeout(() => setIsSharing(false), 1000);
    }
  };

  return (
    <button
      onClick={handleShare}
      type="button"
      disabled={isSharing}
      className={cn(
        "shadow-[0px_0px_2px_0px_#00000040] bg-white group hover:bg-primary-light-active transition-all duration-300 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
        direction !== "rtl" ? "scale-x-[-1]" : ""
      )}
    >
      <ShareIcon className="text-primary size-6 group-hover:text-white transition-all duration-300" />
    </button>
  );
}

export default ShareButton;
