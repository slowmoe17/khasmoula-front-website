import {
  DetectCoupon,
  HeroSection,
  RecentOffers,
  StatsHero,
  StoreMarquee,
} from "@/features/home";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsHero />
      <StoreMarquee />
      <RecentOffers />
      {/* <RecentCoupons /> */}
      <DetectCoupon />
    </div>
  );
}
