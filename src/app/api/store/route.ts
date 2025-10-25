import { createAxiosServer } from "@/lib/axios";
import { APIFilters } from "@/types";
import axios from "axios";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filters = Object.fromEntries(searchParams.entries()) as APIFilters;

    const country = searchParams.get("country") || "";
    const lang = searchParams.get("locale") || "";

    const stores = await createAxiosServer({
      country,
      lang,
    }).get("/store", {
      params: filters,
    });

    return Response.json(stores.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message =
        error.response?.data?.message || "Unexpected server error";
      return Response.json({ message }, { status });
    }
    return Response.json(
      { message: "Unexpected server error" },
      { status: 500 }
    );
  }
}
