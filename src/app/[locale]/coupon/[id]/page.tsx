"use client";

import { useShareRedirect } from "@/hooks/useShareRedirect";

// interface PageProps {
//   params: Promise<{ id: string }>;
// }

function Page() {
  useShareRedirect();
  // const { id } = await params;

  // const locale = await getLocale();

  // redirect({
  //   href: {
  //     pathname: routes.home,
  //     query: { coupon: id },
  //   },
  //   locale,
  // });
}

export default Page;
