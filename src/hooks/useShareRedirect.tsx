"use client";

import { useEffect } from "react";

function useShareRedirect() {
  useEffect(() => {
    const userAgent =
      typeof navigator !== "undefined" ? navigator.userAgent : "";

    const playStore =
      "https://play.google.com/store/apps/details?id=com.devsisters.ck&pcampaignid=web_share";
    const appStore = "https://apps.apple.com/app/id6502813342";

    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);

    console.log(userAgent);
    console.log(isAndroid, isIOS);

    if (isAndroid) {
      setTimeout(() => {
        window.location.href = playStore;
      }, 1500);
    } else if (isIOS) {
      setTimeout(() => {
        window.location.href = appStore;
      }, 1500);
    }
  }, []);
}

export { useShareRedirect };
