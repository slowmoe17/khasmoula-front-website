import axios from "axios";
import { LANGUAGE } from "./constants";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const country = localStorage.getItem("country") || "SA";

    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const locale = pathParts[0];

    const lang = Object.values(LANGUAGE).includes(locale as LANGUAGE)
      ? locale
      : LANGUAGE["العربية"];

    config.params = {
      ...(config.params || {}),
      country,
      lang,
    };
  }
  return config;
});

type CreateAxiosServerOptions = {
  lang?: string;
};

export function createAxiosServer({ lang = "ar" }: CreateAxiosServerOptions) {
  return axios.create({
    baseURL: process.env.BASE_URL,
    params: {
      lang,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default api;
