"use client";

import { Container, TitlePage } from "@/components";
import { useShareRedirect } from "@/hooks";

function Page() {
  useShareRedirect();
  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] pb-[170px]">
      <Container>
        <TitlePage title="نون" className="text-[32px]" />
      </Container>
    </div>
  );
}

export default Page;
