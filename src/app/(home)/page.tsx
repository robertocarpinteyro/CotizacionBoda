import {
  HeroSection,
  ContentPackageSection,
  BenefitsSection,
  UGCReelsSection,
  AutoReelsSection,
  PricingSection,
  FAQ,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContentPackageSection />
      <BenefitsSection />
      <UGCReelsSection />
      <AutoReelsSection />
      <PricingSection />
      <FAQ />
    </main>
  );
}
