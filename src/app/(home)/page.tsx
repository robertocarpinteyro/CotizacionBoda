import {
  HeroSection,
  ContentPackageSection,
  BenefitsSection,
  PortfolioSection,
  UGCReelsSection,
  AutoReelsSection,
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
      <UGCReelsSection />
      <AutoReelsSection />
      <PaidMediaSection />
      <PricingSection />
      <FAQ />
    </main>
  );
}
