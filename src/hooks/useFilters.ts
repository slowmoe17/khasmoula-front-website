"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface UseFiltersProps {
  scroll?: boolean;
}

export function useFilters(props: UseFiltersProps = { scroll: true }) {
  const { scroll = true } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Pagination functionality from usePagination
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  // Export search parameters
  const getSearchParam = useCallback(
    (key: string) => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  const getAllSearchParams = useCallback(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [searchParams]);

  // Update URL parameters
  const updateParams = useCallback(
    (updates: Record<string, string | number | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === undefined || value === "") {
          params.delete(key);
        } else {
          params.set(key, value.toString());
        }
      });

      router.replace(`${pathname}?${params.toString()}`, { scroll });
    },
    [searchParams, router, pathname, scroll]
  );

  // Remove specific parameters
  const removeParams = useCallback(
    (keys: string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      keys.forEach((key) => params.delete(key));
      router.replace(`${pathname}?${params.toString()}`, { scroll });
    },
    [searchParams, router, pathname, scroll]
  );

  // Clear all parameters
  const clearAllParams = useCallback(() => {
    router.replace(pathname, { scroll });
  }, [router, pathname, scroll]);

  return {
    router,
    searchParams,
    pathname,
    // Pagination
    page,
    handlePageChange,
    // Search parameters
    getSearchParam,
    getAllSearchParams,
    // URL manipulation
    updateParams,
    removeParams,
    clearAllParams,
  };
}
