import { useQuery } from "@tanstack/react-query";
import { getUserCountry } from "../services/userCountry.api";
import { useEffect } from "react";

function useGetUserCountry() {
  const { data, isLoading } = useQuery({
    queryKey: ["user-country"],
    queryFn: getUserCountry,
  });

  useEffect(() => {
    if (isLoading) return;
    if (data?.country) {
      localStorage.setItem("country", data.country);
    }
  }, [data?.country, isLoading]);

  return null;
}

export default useGetUserCountry;
