import { createAxiosServer } from "@/lib/axios";
import { APIFilters } from "@/types";
import { getLocale } from "next-intl/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { searchParams } = new URL(request.url);
    const filters = Object.fromEntries(searchParams.entries()) as APIFilters;

    const locale = await getLocale();
    const coupon = await createAxiosServer({
      lang: locale,
    }).get(`/coupon/${id}`, { params: filters });

    return Response.json(coupon.data);
  } catch (error) {
    console.error("Error fetching coupon:", error);
    return Response.json({ message: "Error fetching coupon" }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: couponId } = await params;

    const locale = await getLocale();
    const coupon = await createAxiosServer({
      lang: locale,
    }).post(`/coupon/count/${couponId}`);

    return Response.json(coupon.data);
  } catch (error) {
    console.error("Error fetching coupon:", error);
    return Response.json({ message: "Error fetching coupon" }, { status: 500 });
  }
}
