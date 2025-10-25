import { routes } from "@/lib/route";
import { redirect } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function Page({ params }: PageProps) {
  const { id } = await params;

  const locale = await getLocale();

  redirect({
    href: {
      pathname: routes.home,
      query: { coupon: id },
    },
    locale,
  });
}

export default Page;
