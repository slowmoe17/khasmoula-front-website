import { Container, Filters, StoreCard } from "@/components";
import { Suspense } from "react";

function Page() {
  return (
    <div className="pt-[170px]">
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Filters title="متاجرنا" placeholder="ابحث عن متجر..." />
        </Suspense>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9.5">
          <StoreCard />
        </div>
      </Container>
    </div>
  );
}

export default Page;
