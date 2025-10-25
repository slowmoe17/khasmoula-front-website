"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

function usePagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const router = useRouter();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return { page, handlePageChange };
}

export { usePagination };
