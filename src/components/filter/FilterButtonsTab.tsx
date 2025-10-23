"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui";

// Mock data for filter buttons
const FILTER_BUTTONS = [
  { label: "الكترونيات", value: "electronics" },
  { label: "ملابس", value: "clothes" },
  { label: "منزلية", value: "home" },
];

interface FilterButtonsTabProps {
  onSelectFilter: (value: string) => void;
  selectedValue: string;
}

function FilterButtonsTab({
  onSelectFilter,
  selectedValue,
}: FilterButtonsTabProps) {
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
        الكل
      </Button>
      {FILTER_BUTTONS.map((btn) => (
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
