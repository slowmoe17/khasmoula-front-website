"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { useLocalization } from "@/hooks";

interface FilterButtonsTabProps {
  onSelectFilter: (value: string) => void;
  selectedValue: string;
  buttons: { label: string; value: string }[];
}

function FilterButtonsTab({
  onSelectFilter,
  selectedValue,
  buttons,
}: FilterButtonsTabProps) {
  const { t: tFiltersCouponsSheet } = useLocalization({
    namespace: "components.filtersCouponsSheet",
  });
  // Handler for selecting a button
  const handleClick = (value?: string) => {
    onSelectFilter(value ?? "");
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant={!selectedValue ? "default" : "outline"}
        className={cn(
          !selectedValue && "border-[#CCCCCC]",
          "font-medium rounded-[10px] px-3 py-1"
        )}
        onClick={() => handleClick(undefined)}
      >
        {tFiltersCouponsSheet("all")}
      </Button>
      {buttons.map((btn) => (
        <Button
          key={btn.value}
          variant={selectedValue === btn.value ? "default" : "outline"}
          className={cn(
            selectedValue === btn.value && "border-[#CCCCCC]",
            "font-medium rounded-[10px] px-3 py-1"
          )}
          onClick={() => handleClick(btn.value)}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
}

export default FilterButtonsTab;
