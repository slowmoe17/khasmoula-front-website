"use client";

import FilterSheet from "./FilterSheet";
import InputSearch from "../InputSearch";

interface FiltersProps {
  title: string;
  placeholder: string;
}

function Filters(props: FiltersProps) {
  const { title, placeholder } = props;

  return (
    <section className="flex items-center justify-between">
      <h1 className="text-[28px] font-semibold">{title}</h1>
      <div className="flex items-center gap-5">
        <FilterSheet />
        <InputSearch placeholder={placeholder} />
      </div>
    </section>
  );
}

export default Filters;
