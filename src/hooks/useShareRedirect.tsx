"use client";

import { useEffect } from "react";

function useShareRedirect() {
  useEffect(() => {
    const userAgent =
      typeof navigator !== "undefined" ? navigator.userAgent : "";

    // روابط المتاجر الرسمية
    const playStore =
      "https://play.google.com/store/apps/details?id=com.devsisters.ck&pcampaignid=web_share";
    const appStore = "https://apps.apple.com/app/id6502813342"; // ← ده الـ App Store ID الحقيقي لتطبيق Khasmoola (لو اتغير حدثه)

    if (/android/i.test(userAgent)) {
      // انتظر 1.5 ثانية: لو الأب ما فتحش → روح للمتجر
      setTimeout(() => {
        window.location.href = playStore;
      }, 1500);
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      setTimeout(() => {
        window.location.href = appStore;
      }, 1500);
    }
  }, []);
}

export { useShareRedirect };
