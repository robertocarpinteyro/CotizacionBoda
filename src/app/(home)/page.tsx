import {
  HeroSection,
  ContentPackageSection,
  BenefitsSection,
  InfluencerSection,
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
      <PricingSection />
      <FAQ />
    </main>
  );
}
