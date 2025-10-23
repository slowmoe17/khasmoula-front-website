import { routes } from "@/lib/route";
import { redirect } from "next/navigation";

function Page() {
  redirect(routes.home);

  // return <div>Page</div>;
}

export default Page;
