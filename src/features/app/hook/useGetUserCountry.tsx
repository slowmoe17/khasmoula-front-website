"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getUserCountry } from "../services";

declare global {
  interface Window {
    __countryReady?: boolean;
  }
}

function useGetUserCountry() {
  const [initialized, setInitialized] = useState(false);

  const { data: countryCode, isLoading } = useQuery({
    queryKey: ["user-country"],
    queryFn: getUserCountry,
    retry: false, // no retry attempts
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (initialized) return;

    // after the loading is complete (success or failure)
    if (!isLoading) {
      const fallbackCountry = "GB"; // default value in case of failure
      const finalCountry = countryCode || fallbackCountry;

      localStorage.setItem("country", finalCountry);
      window.__countryReady = true;
      setInitialized(true);
    }

    // clean the data when the user closes the page
    const handleUnload = () => {
      localStorage.removeItem("country");
      window.__countryReady = false;
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [countryCode, isLoading, initialized]);

  return null;
}

export default useGetUserCountry;
