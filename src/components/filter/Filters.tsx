"use client";

import FilterSheet from "./FilterSheet";
import InputSearch from "../InputSearch";
import { TitlePage } from "../ui";

interface FiltersProps {
  title: string;
  placeholder: string;
  showInputSearch?: boolean;
}

function Filters(props: FiltersProps) {
  const { title, placeholder, showInputSearch = true } = props;

  return (
    <section className="flex items-center justify-between max-sm:flex-wrap gap-3">
      <TitlePage title={title} />
      <div className="flex items-center gap-5 max-sm:grow">
        <FilterSheet />
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
