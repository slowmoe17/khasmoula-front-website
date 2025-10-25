import { Container } from "@/components";
import Image from "next/image";
import ShowMoreHeroSection from "./ShowMoreHeroSection";
import { getTranslations } from "next-intl/server";

async function HeroSection() {
  const tHome = await getTranslations("home.hero");

  return (
    <section className="h-screen hero-section flex items-center justify-center overflow-hidden">
      <Container className="max-w-[960px] mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center space-y-7 md:mb-24 mb-10">
            <h1 className="md:text-[54px] text-[32px] font-bold leading-12">
              {tHome("title-1")}{" "}
              <Image
                src="/money.png"
                alt="money"
                width={69}
                height={69}
                className="inline-block md:mb-20"
              />{" "}
              {tHome("title-2")}
            </h1>
            <p className="md:text-[28px] text-2xl">{tHome("description")}</p>
          </div>

          <div className="absolute top-[130%] sm:top-full left-1/2 -translate-x-1/2 aspect-square w-[80vw] max-w-[960px] rounded-full circle flex items-start justify-center overflow-hidden">
            <ShowMoreHeroSection title={tHome("showMore")} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
