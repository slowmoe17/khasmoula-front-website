"use client";

import { useLocalization } from "@/hooks";
import { useFilters } from "@/hooks/useFilters";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FilterIcon } from "../icons";
import { Button } from "../ui";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import FilterButtonsTab from "./FilterButtonsTab";

export interface StoreFilterSelected {
  name?: string | undefined;
  couponsCount?: string | undefined;
}

function FilterStoresSheet() {
  const { direction, t: tFiltersStoresSheet } = useLocalization({
    namespace: "components.filtersStoresSheet",
  });
  const { updateParams, clearAllParams, getAllSearchParams, searchParams } =
    useFilters();

  const [isOpen, setIsOpen] = useState(false);

  // Store the selected filters in state
  const [selectedFilters, setSelectedFilters] = useState<StoreFilterSelected>({
    name: undefined,
    couponsCount: undefined,
  });

  const sortNames = useMemo(() => {
    return [
      { label: tFiltersStoresSheet("sortNames.a-z"), value: "asc" },
      { label: tFiltersStoresSheet("sortNames.z-a"), value: "desc" },
    ];
  }, [tFiltersStoresSheet]);

  const sortCouponsCounts = useMemo(() => {
    return [
      { label: tFiltersStoresSheet("sortCouponsCounts.asc"), value: "asc" },
      { label: tFiltersStoresSheet("sortCouponsCounts.desc"), value: "desc" },
    ];
  }, [tFiltersStoresSheet]);

  /**
   * Handles selection of a specific filter type.
   * @param name - filter key (e.g. 'sortName')
   * @param value - filter value to set
   */
  const handleSelectFilter = useCallback(
    (name: keyof StoreFilterSelected, value: string) => {
      setSelectedFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  /**
   * Clears all filters, resets state and updates URL accordingly.
   */
  const handleClearFilters = useCallback(() => {
    setSelectedFilters({});
    clearAllParams();
  }, [clearAllParams]);

  /**
   * Applies current filters to the URL as query parameters.
   * Uses the new useFilters hook for cleaner URL management.
   */
  const handleApplyFilters = useCallback(() => {
    // Convert selected filters to URL parameters
    const filterParams: Record<string, string> = {};
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        filterParams[key] = value.toString();
      }
    });

    updateParams(filterParams);
    setIsOpen(false);
  }, [selectedFilters, updateParams]);

  /**
   * Synchronizes component state from URL parameters whenever they change.
   * Keeps local filters in sync with what's in the URL.
   */
  useEffect(() => {
    const urlParams = getAllSearchParams();
    setSelectedFilters({
      name: urlParams.name || undefined,
      couponsCount: urlParams.couponsCount || undefined,
    });
  }, [searchParams, getAllSearchParams]);

  // Number of filters currently selected
  const filterCount = Object.values(selectedFilters ?? {}).filter(
    (value) => value !== undefined && value !== null && value !== ""
  ).length;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="bg-white rounded-[8px] p-2 shadow-[0px_0px_3px_0px_#0000002B] w-12 h-12 flex items-center justify-center"
        >
          <FilterIcon className="size-7" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={direction === "rtl" ? "right" : "left"}
        showCloseButton={false}
        className="py-10 px-7 md:max-w-[500px] w-full"
      >
        <SheetHeader className="flex items-center justify-between flex-row">
          <SheetTitle className="text-2xl font-semibold">
            {tFiltersStoresSheet("title")}
          </SheetTitle>
          {filterCount > 0 && (
            <div className="text-sm font-semibold text-[#737373]">
              <button
                className="text-primary underline underline-offset-2"
                onClick={handleClearFilters}
              >
                {tFiltersStoresSheet("clearFilters")}
              </button>
              - {tFiltersStoresSheet("filterCount", { count: filterCount })}
            </div>
          )}
        </SheetHeader>

        <div className="grid gap-7">
          <Collapsible className="border-b border-[#CCCCCC] pb-5">
            <CollapsibleTrigger className="flex items-center justify-between flex-row w-full">
              {tFiltersStoresSheet("filterSortName")}
              <ChevronDown className="size-6" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-5">
              <div className="flex flex-wrap gap-4">
                <FilterButtonsTab
                  onSelectFilter={(value) => handleSelectFilter("name", value)}
                  selectedValue={selectedFilters?.name ?? ""}
                  buttons={sortNames}
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="border-b border-[#CCCCCC] pb-5">
            <CollapsibleTrigger className="flex items-center justify-between flex-row w-full">
              {tFiltersStoresSheet("filterSortCouponsCount")}
              <ChevronDown className="size-6" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-5">
              <div className="flex flex-wrap gap-4">
                <FilterButtonsTab
                  onSelectFilter={(value) =>
                    handleSelectFilter("couponsCount", value)
                  }
                  selectedValue={selectedFilters?.couponsCount ?? ""}
                  buttons={sortCouponsCounts}
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <Button
          className="mt-12 h-[58px] text-2xl"
          onClick={handleApplyFilters}
        >
          {tFiltersStoresSheet("applyFilters")}
        </Button>
      </SheetContent>
    </Sheet>
  );
}

export default FilterStoresSheet;
