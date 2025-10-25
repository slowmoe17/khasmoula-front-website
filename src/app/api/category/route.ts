import { createAxiosServer } from "@/lib/axios";
import { APIFilters } from "@/types";
import { getLocale } from "next-intl/server";
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filters = Object.fromEntries(searchParams.entries()) as APIFilters;

    const locale = await getLocale();

    const response = await createAxiosServer({
      lang: locale,
    }).get("/category", { params: filters });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message =
        error.response?.data?.message ||
        error.message ||
        "Server error occurred";

      return NextResponse.json({ message, statusCode: status }, { status });
    }

    return NextResponse.json(
      { message: "Unexpected server error" },
      { status: 500 }
    );
  }
}
