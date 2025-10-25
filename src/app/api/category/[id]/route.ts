import { createAxiosServer } from "@/lib/axios";
import { APIFilters } from "@/types";
import axios from "axios";
import { getLocale } from "next-intl/server";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { searchParams } = new URL(request.url);
    const filters = Object.fromEntries(searchParams.entries()) as APIFilters;

    const locale = await getLocale();

    const category = await createAxiosServer({ lang: locale }).get(
      `/category/${id}`,
      {
        params: filters,
      }
    );

    return NextResponse.json(category.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message =
        error.response?.data?.message || "Unexpected server error";
      return NextResponse.json({ message }, { status });
    }
    return NextResponse.json(
      { message: "Unexpected server error" },
      { status: 500 }
    );
  }
}
