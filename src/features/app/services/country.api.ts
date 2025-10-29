import api from "@/lib/axios";
import axios from "axios";
import { GetCountriesResponse } from "../types";

export const getUserCountry = async () => {
  const { data } = await axios.get("https://ipapi.co/json");
  return data.country;
};

export const getCountries = async (): Promise<GetCountriesResponse> => {
  const res = await api.get("/country");
  return res.data;
};
