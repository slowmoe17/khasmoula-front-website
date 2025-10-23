"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface InputSearchProps extends React.ComponentProps<"input"> {
  placeholder?: string;
}

function InputSearch(props: InputSearchProps) {
  const { className, placeholder = "", ...rest } = props;

  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [searchValue, setSearchValue] = useState(initialSearch);
  const [debouncedSearch] = useDebounce(searchValue, 400);

  useEffect(() => {
    setSearchValue(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (debouncedSearch) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }

    const newQuery = params.toString();
    const currentQuery = window.location.search.substring(1);

    if (newQuery !== currentQuery) {
      router.replace(`?${newQuery}`, { scroll: false });
    }
  }, [debouncedSearch, router]);

  return (
    <div className="relative space-x-5">
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Search className="text-[#999999] size-5" />
      </div>
      <Input
        placeholder={placeholder}
        className={cn(
          "bg-white rounded-[8px] ps-8 shadow-[0px_0px_4px_0px_#54982533] h-12 md:w-80 text-lg font-semibold placeholder:text-[#999999]",
          className
        )}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        {...rest}
      />
    </div>
  );
}

export default InputSearch;
