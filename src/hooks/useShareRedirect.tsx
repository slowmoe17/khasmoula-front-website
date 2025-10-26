"use client";

import { useEffect, useState } from "react";

function useShareRedirect() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userAgent =
      typeof navigator !== "undefined" ? navigator.userAgent : "";

    const playStore =
      "https://play.google.com/store/apps/details?id=com.devsisters.ck&pcampaignid=web_share";
    const appStore = "https://apps.apple.com/app/id6502813342";

    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);

    if (isAndroid) {
      setTimeout(() => {
        window.location.href = playStore;
        setIsLoading(false);
      }, 1500);
    } else if (isIOS) {
      setTimeout(() => {
        window.location.href = appStore;
        setIsLoading(false);
      }, 1500);
    } else {
      setIsLoading(false);
    }
  }, []);

  return { isLoading };
}

export { useShareRedirect };
