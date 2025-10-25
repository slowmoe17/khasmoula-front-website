import { createAxiosServer } from "@/lib/axios";
import { getLocale } from "next-intl/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    console.log("id", id);

    const locale = await getLocale();
    const coupon = await createAxiosServer({
      lang: locale,
    }).get(`/coupon/${id}`);

    return Response.json(coupon.data);
  } catch (error) {
    console.error("Error fetching coupon:", error);
    return Response.json({ message: "Error fetching coupon" }, { status: 500 });
  }
}
