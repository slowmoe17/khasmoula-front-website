"use client";

import { useCategories } from "@/features/category";
import { useLocalization } from "@/hooks";
import { useFilters } from "@/hooks/useFilters";
import { usePathname } from "@/i18n/navigation";
import { routes } from "@/lib/route";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import HandleResponse from "../HandleResponse";
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

interface UseFiltersProps {
  scroll?: boolean;
}

export interface FilterSelected {
  categoryId?: string | undefined;
  discountType?: string | undefined;
  validType?: string | undefined;
}

function FiltersCouponsSheet(props: UseFiltersProps) {
  const { scroll = true } = props;
  const pathname = usePathname();
  const isCategoryPage = pathname.includes(routes.category);
  const { direction, t: tFiltersCouponsSheet } = useLocalization({
    namespace: "components.filtersCouponsSheet",
  });
  const { updateParams, clearAllParams, getAllSearchParams, searchParams } =
    useFilters({ scroll });

  const [isOpen, setIsOpen] = useState(false);

  const { data: { data: categories = [] } = {}, isLoading } = useCategories(
    {
      limit: false,
    },
    !isCategoryPage
  );

  const discountTypes = useMemo(
    () => [
      { label: tFiltersCouponsSheet("discountTypes.fixed"), value: "fixed" },
      {
        label: tFiltersCouponsSheet("discountTypes.percentage"),
        value: "percentage",
      },
    ],
    [tFiltersCouponsSheet]
  );

  const validTypes = useMemo(
    () => [
      { label: tFiltersCouponsSheet("validTypes.today"), value: "today" },
      { label: tFiltersCouponsSheet("validTypes.week"), value: "week" },
      { label: tFiltersCouponsSheet("validTypes.month"), value: "month" },
    ],
    [tFiltersCouponsSheet]
  );
  // Store the selected filters in state
  const [selectedFilters, setSelectedFilters] = useState<FilterSelected>({
    categoryId: undefined,
    discountType: undefined,
    validType: undefined,
  });

  /**
   * Handles selection of a specific filter type.
   * @param name - filter key (e.g. 'category', 'discountType', 'validType')
   * @param value - filter value to set
   */
  const handleSelectFilter = useCallback(
    (name: keyof FilterSelected, value: string) => {
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
      if (value) filterParams[key] = value;
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
      categoryId: urlParams.category || undefined,
      discountType: urlParams.discountType || undefined,
      validType: urlParams.validType || undefined,
    });
  }, [searchParams, getAllSearchParams]);

  // Number of filters currently selected
  const filterCount = Object.values(selectedFilters ?? {}).filter(
    Boolean
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
            {tFiltersCouponsSheet("title")}
          </SheetTitle>
          {filterCount > 0 && (
            <div className="text-sm font-semibold text-[#737373]">
              <button
                className="text-primary underline underline-offset-2"
                onClick={handleClearFilters}
              >
                {tFiltersCouponsSheet("clearFilters")}
              </button>
              - {tFiltersCouponsSheet("filterCount", { count: filterCount })}
            </div>
          )}
        </SheetHeader>

        <div className="grid gap-7">
          {!isCategoryPage && (
            <Collapsible className="border-b border-[#CCCCCC] pb-5">
              <CollapsibleTrigger className="flex items-center justify-between flex-row w-full">
                {tFiltersCouponsSheet("filterCategory")}
                <ChevronDown className="size-6" />
              </CollapsibleTrigger>
              <HandleResponse
                dataLength={categories.length}
                isLoading={isLoading}
                data="many"
              >
                <CollapsibleContent className="mt-5">
                  <FilterButtonsTab
                    onSelectFilter={(value) =>
                      handleSelectFilter("categoryId", value)
                    }
                    selectedValue={selectedFilters?.categoryId ?? ""}
                    buttons={categories?.map((category) => ({
                      label: category.name,
                      value: category._id,
                    }))}
                  />
                </CollapsibleContent>
              </HandleResponse>
            </Collapsible>
          )}

          <Collapsible className="border-b border-[#CCCCCC] pb-5">
            <CollapsibleTrigger className="flex items-center justify-between flex-row w-full">
              {tFiltersCouponsSheet("filterDiscount")}
              <ChevronDown className="size-6" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-5">
              <FilterButtonsTab
                onSelectFilter={(value) =>
                  handleSelectFilter("discountType", value)
                }
                selectedValue={selectedFilters?.discountType ?? ""}
                buttons={discountTypes}
              />
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="border-b border-[#CCCCCC] pb-5">
            <CollapsibleTrigger className="flex items-center justify-between flex-row w-full">
              {tFiltersCouponsSheet("filterValid")}
              <ChevronDown className="size-6" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-5">
              <FilterButtonsTab
                onSelectFilter={(value) =>
                  handleSelectFilter("validType", value)
                }
                selectedValue={selectedFilters?.validType ?? ""}
                buttons={validTypes}
              />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <Button
          className="mt-12 h-[58px] text-2xl"
          onClick={handleApplyFilters}
        >
          {tFiltersCouponsSheet("applyFilters")}
        </Button>
      </SheetContent>
    </Sheet>
  );
}

export default FiltersCouponsSheet;
