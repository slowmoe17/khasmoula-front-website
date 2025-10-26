"use client";

import { LoadingFullScreen } from "@/components";
import { useShareRedirect } from "@/hooks/useShareRedirect";
import { redirect } from "@/i18n/navigation";
import { routes } from "@/lib/route";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams<{ id: string }>();
  const locale = useLocale();
  const { isLoading: isShareRedirectLoading } = useShareRedirect();

  if (isShareRedirectLoading) return <LoadingFullScreen />;

  redirect({
    href: {
      pathname: routes.home,
      query: { coupon: id },
    },
    locale,
  });
}

export default Page;
