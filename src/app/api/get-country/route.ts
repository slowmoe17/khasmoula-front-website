import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "127.0.0.1";

  if (ip === "127.0.0.1" || ip === "::1") {
    return NextResponse.json({ country: "saudi-arabia" }); // fallback
  }

  try {
    const res = await fetch(`https://ipwho.is/${ip}`);
    const data = await res.json();

    const country = data?.country_name?.toLowerCase() || "saudi-arabia";
    return NextResponse.json({ country });
  } catch (error) {
    console.error("Error fetching country:", error);
    return NextResponse.json({ country: "saudi-arabia" }); // fallback عام
  }
}
