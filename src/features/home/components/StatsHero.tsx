import { Container } from "@/components";
import Image from "next/image";
import StatsHeroSwiper from "./StatsHeroSwiper";

function StatsHero() {
  return (
    <section
      id="stats-hero"
      className="h-screen bg-primary relative overflow-hidden flex items-center justify-center"
    >
      <Container className="text-white h-fit w-full">
        <p className="text-center text-3xl font-bold">ارقامنا تتحدث عنا</p>

        <div className="w-fit mx-auto mt-9.5">
          <Image
            src="/arrowCurve.png"
            alt="arrow-curve"
            width={124}
            height={44}
            className="w-[352px] h-[90px] object-contain"
          />
        </div>
        <StatsHeroSwiper />
      </Container>

      {/* bg-shape Image */}
      <div className="absolute top-0 left-0 w-1/3 flex items-start justify-start">
        <Image
          src="/bg-shape.png"
          alt="stats-hero"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Hand Image */}
      <div className="absolute top-0 right-0 w-full max-w-[387px] h-full flex items-start justify-start">
        <Image
          src="/handStatsHero.png"
          alt="stats-hero"
          width={387}
          height={484}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default StatsHero;
