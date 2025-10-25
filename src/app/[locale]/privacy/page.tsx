import { PrivacyContentAr, PrivacyContentEn } from "@/features/privacy";
import { LANGUAGE } from "@/lib/constants";
import { getLocale } from "next-intl/server";

async function Page() {
  const locale = await getLocale();

  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] sm:pb-[170px] pb-12">
      {locale === LANGUAGE["العربية"] ? (
        <PrivacyContentAr />
      ) : (
        <PrivacyContentEn />
      )}
    </div>
  );
}

export default Page;
