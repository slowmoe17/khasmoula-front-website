import { createAxiosServer } from "@/lib/axios";
import axios from "axios";
import { getLocale } from "next-intl/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const locale = await getLocale();
    const store = await createAxiosServer({
      lang: locale,
    }).get(`/store/${id}`);

    return Response.json(store.data);
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
