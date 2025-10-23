import { routes } from "@/lib/route";
import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function Page({ params }: PageProps) {
  const { id } = await params;
  redirect(`${routes.home}?coupon=${id}`);
}

export default Page;
