import { Container } from "@/components";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function RecentOffers() {
  const tHome = await getTranslations("home.recentOffers");

  return (
    <section className="md:py-14 py-8 max-md:grid max-md:h-screen">
      <Container className="max-md:flex max-md:flex-col max-md:gap-y-6">
        <h2 className="md:text-3xl text-2xl">{tHome("title")}</h2>

        <div className="grid md:grid-cols-7 md:grid-rows-10 grid-rows-12 gap-4 md:h-[690px] max-md:flex-1 md:mt-12">
          <div className="md:col-span-4 md:row-span-5 row-span-4 md:col-start-4 md:row-start-1 relative">
            <Image
              src="/banner-3.jpg"
              alt="offer"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="md:col-span-4 md:row-span-5 row-span-4 md:col-start-4 md:row-start-6 relative">
            <Image
              src="/banner-2.png"
              alt="offer"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="md:col-span-3 md:row-span-10 row-span-4 md:col-start-1 md:row-start-1 relative">
            <Image
              src="/banner-1.jpg"
              alt="offer"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RecentOffers;
