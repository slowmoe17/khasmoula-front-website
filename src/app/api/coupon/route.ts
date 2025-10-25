import { createAxiosServer } from "@/lib/axios";
import { APIFilters } from "@/types";
import { getLocale } from "next-intl/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country") || "";
    const filters = Object.fromEntries(searchParams.entries()) as APIFilters;

    const locale = await getLocale();

    const response = await createAxiosServer({
      lang: locale,
      country,
    }).get("/coupon", { params: filters });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error fetching coupon:", error);
  }
}
