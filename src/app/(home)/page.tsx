import {
  HeroSection,
  ContentPackageSection,
  BenefitsSection,
  PortfolioSection,
  InfluencerSection,
  PaidMediaSection,
  PricingSection,
  FAQ,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContentPackageSection />
      <BenefitsSection />
      <PortfolioSection />
      <InfluencerSection />
      <PaidMediaSection />
      <PricingSection />
      <FAQ />
    </main>
  );
}
