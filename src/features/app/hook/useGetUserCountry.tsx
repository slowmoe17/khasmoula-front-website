"use client";
import { useQuery } from "@tanstack/react-query";
import { getUserCountry } from "../services/userCountry.api";
import { useEffect } from "react";

function useGetUserCountry() {
  const { data: countryCode, isLoading } = useQuery({
    queryKey: ["user-country"],
    queryFn: getUserCountry,
    retry: false,
  });

  useEffect(() => {
    if (isLoading) return;
    if (countryCode) {
      localStorage.setItem("country", countryCode);
    }
  }, [countryCode, isLoading]);

  return null;
}

export default useGetUserCountry;
