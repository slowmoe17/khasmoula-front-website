import { Container } from "@/components";
import Image from "next/image";
import ShowMoreHeroSection from "./ShowMoreHeroSection";

function HeroSection() {
  return (
    <section className="h-screen hero-section flex items-center justify-center overflow-hidden">
      <Container className="max-w-[960px] mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center space-y-7 mb-24">
            <h1 className="text-[54px] font-bold leading-12">
              التوفير{" "}
              <Image
                src="/money.png"
                alt="money"
                width={69}
                height={69}
                className="inline-block mb-20"
              />{" "}
              صار أسهل من أي وقت فقط انسخ كودك وابدأ تسوّق بثقة
            </h1>
            <p className="text-[28px]">
              خصوماتك جاهزة! انسخ كودك وابدأ رحلة التسوّق الذكي
            </p>
          </div>

          <div className="absolute top-full left-1/2 -translate-x-1/2 aspect-square w-[80vw] max-w-[960px] rounded-full circle flex items-start justify-center overflow-hidden">
            <ShowMoreHeroSection />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
