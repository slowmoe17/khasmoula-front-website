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

    config.params = { ...(config.params || {}), country };
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
