"use client";

import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
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
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useLocalization } from "@/hooks";

export interface FilterSelected {
  category?: string | undefined;
  discountType?: string | undefined;
  validType?: string | undefined;
}

function FilterSheet() {
  const { direction } = useLocalization();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  // Store the selected filters in state
  const [selectedFilters, setSelectedFilters] = useState<FilterSelected>({
    category: undefined,
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
    router.replace(pathname, { scroll: false });
  }, [router, pathname]);

  /**
   * Applies current filters to the URL as query parameters.
   * It first removes all possible filter keys, then adds back the selected ones.
   * Afterwards, closes the filter sheet UI.
   */
  const handleApplyFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    // Remove old filter keys
    Object.keys(selectedFilters).forEach((key) => params.delete(key));

    // Add currently selected filters if they exist
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    const newUrl = `${pathname}?${params.toString()}`;
    router.replace(newUrl, { scroll: false });
    setIsOpen(false);
  }, [selectedFilters, router, pathname, searchParams]);

  /**
   * Synchronizes component state from URL parameters whenever they change.
   * Keeps local filters in sync with what's in the URL.
   */
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const selectedFilters = Object.fromEntries(params.entries());
    setSelectedFilters(selectedFilters);
  }, [searchParams]);

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
          <SheetTitle className="text-2xl font-semibold">التصنيفات</SheetTitle>
          {filterCount > 0 && (
            <div className="text-sm font-semibold text-[#737373]">
              <button
                className="text-primary underline underline-offset-2"
                onClick={handleClearFilters}
              >
                ازاله المحدد
              </button>
              - {filterCount} تصنيف
            </div>
          )}
        </SheetHeader>

        <div className="grid gap-7">
          <Collapsible className="border-b border-[#CCCCCC] pb-5">
            <CollapsibleTrigger className="flex items-center justify-between flex-row w-full">
              تصنيف حسب الاقسام
              <ChevronDown className="size-6" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-5">
              <FilterButtonsTab
                onSelectFilter={(value) =>
                  handleSelectFilter("category", value)
                }
                selectedValue={selectedFilters?.category ?? ""}
              />
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="border-b border-[#CCCCCC] pb-5">
            <CollapsibleTrigger className="flex items-center justify-between flex-row w-full">
              نوع الخصم
              <ChevronDown className="size-6" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-5">
              <FilterButtonsTab
                onSelectFilter={(value) =>
                  handleSelectFilter("discountType", value)
                }
                selectedValue={selectedFilters?.discountType ?? ""}
              />
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="border-b border-[#CCCCCC] pb-5">
            <CollapsibleTrigger className="flex items-center justify-between flex-row w-full">
              مدة العرض
              <ChevronDown className="size-6" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-5">
              <FilterButtonsTab
                onSelectFilter={(value) =>
                  handleSelectFilter("validType", value)
                }
                selectedValue={selectedFilters?.validType ?? ""}
              />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <Button
          className="mt-12 h-[58px] text-2xl"
          onClick={handleApplyFilters}
        >
          تم
        </Button>
      </SheetContent>
    </Sheet>
  );
}

export default FilterSheet;
