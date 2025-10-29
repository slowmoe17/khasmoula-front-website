"use client";

import { useCountries } from "@/features/app/hook";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger, Skeleton } from ".";
import { useQueryClient } from "@tanstack/react-query";

function SwitchCountry() {
  const queryClient = useQueryClient();

  const { data: countries, isLoading } = useCountries();
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    const userCountry = localStorage.getItem("country");
    if (userCountry) {
      setCountry(userCountry);
    }
  }, [countries]);

  if (isLoading) return <Skeleton className="w-10 h-10" />;

  const countryImage = countries?.data.find((c) => c.code === country)?.image;

  const handleChangeCountry = (code: string) => {
    setCountry(code);
    localStorage.setItem("country", code);
    queryClient.invalidateQueries();
  };

  return (
    <Popover>
      <PopoverTrigger>
        {countryImage && country && !isLoading && (
          <div className="w-7 h-7 relative">
            <Image
              src={countryImage}
              alt={country}
              fill
              className="object-contain rounded-[10px]"
            />
          </div>
        )}

        {!isLoading && !countryImage && (
          <div>
            <Globe className="w-6 h-6 text-primary" />
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="rounded-md" side="bottom" sideOffset={10}>
        <div className="flex flex-col gap-3 py-1">
          {countries?.data.map((c) => (
            <button
              key={c.code}
              onClick={() => handleChangeCountry(c.code)}
              className={cn(
                "flex items-center justify-between gap-6 px-2 py-1 transition-all duration-300 hover:bg-primary-light rounded-[10px] border border-transparent hover:border-primary",
                country === c.code &&
                  "bg-primary-light rounded-[10px] border border-primary"
              )}
            >
              <div className="w-7 h-7 relative">
                <Image
                  src={c.image}
                  alt={c.code}
                  fill
                  className="object-contain rounded-[10px]"
                />
              </div>

              <span className="text-sm font-medium">{c.name}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default memo(SwitchCountry);
