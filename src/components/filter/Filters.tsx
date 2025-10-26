"use client";

import InputSearch from "../InputSearch";
import { TitlePage } from "../ui";
import FiltersCouponsSheet from "./FiltersCouponsSheet";
import FilterStoresSheet from "./FilterStoresSheet";

interface FiltersProps {
  title: string;
  placeholder: string;
  showInputSearch?: boolean;
  filterType?: "coupon" | "store";
  scroll?: boolean;
}

function Filters(props: FiltersProps) {
  const {
    title,
    placeholder,
    showInputSearch = true,
    filterType,
    scroll = true,
  } = props;

  return (
    <section className="flex items-center justify-between max-sm:flex-wrap gap-3">
      <TitlePage title={title} />
      <div className="flex items-center gap-5 max-sm:grow">
        {filterType === "coupon" && <FiltersCouponsSheet scroll={scroll} />}
        {filterType === "store" && <FilterStoresSheet scroll={scroll} />}

        {showInputSearch && (
          <div className="max-sm:flex-1">
            <InputSearch placeholder={placeholder} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Filters;
