import { Container, Filters } from "@/components";
import { Suspense } from "react";

function Page() {
  return (
    <div className="pt-[170px]">
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Filters title="متاجرنا" placeholder="ابحث عن متجر..." />
        </Suspense>
      </Container>
    </div>
  );
}

export default Page;
