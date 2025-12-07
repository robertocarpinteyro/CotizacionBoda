import {
  HeroSection,
  ContentPackageSection,
  BenefitsSection,
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
      <InfluencerSection />
      <PaidMediaSection />
      <PricingSection />
      <FAQ />
    </main>
  );
}
