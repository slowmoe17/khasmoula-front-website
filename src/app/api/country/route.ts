import { createAxiosServer } from "@/lib/axios";
import axios from "axios";
import { getLocale } from "next-intl/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const locale = await getLocale();

    const countries = await createAxiosServer({ lang: locale }).get("/country");
    return NextResponse.json(countries.data);
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
