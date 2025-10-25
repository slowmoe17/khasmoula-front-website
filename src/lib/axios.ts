import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const country = localStorage.getItem("country") || "egypt";

    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const locale = pathParts[0];

    const lang = ["en", "ar"].includes(locale) ? locale : "en";

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
  country?: string;
};

export function createAxiosServer({
  lang = "ar",
  country = "egypt",
}: CreateAxiosServerOptions) {
  return axios.create({
    baseURL: process.env.BASE_URL,
    params: {
      lang,
      country,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default api;
