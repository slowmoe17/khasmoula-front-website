"use client";

import { Container, TitlePage } from "@/components";
import { BannersSwiper, useStore } from "@/features/stores";
import { useShareRedirect } from "@/hooks";
import { useParams } from "next/navigation";

function Page() {
  // TODO: Detect Open in App
  useShareRedirect();

  const { id } = useParams<{ id: string }>();

  const { data: { store = {}, coupons = [] } = {}, isLoading } = useStore(id);

  return (
    <div className="sm:pt-[70px] pt-[50px] lg:pb-[205px] pb-[170px]">
      <Container>
        <TitlePage title="نون" className="text-[32px]" />

        <div className="mt-12 space-y-12">
          <BannersSwiper />
        </div>
      </Container>
    </div>
  );
}

export default Page;
