"use client";

import { memo } from "react";
import useGetUserCountry from "../hook/useGetUserCountry";

function DetectCountry() {
  useGetUserCountry();

  return null;
}

export default memo(DetectCountry);
