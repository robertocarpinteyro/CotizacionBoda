import {
  HeroSection,
  ContentPackageSection,
  BenefitsSection,
  UGCReelsSection,
  AutoReelsSection,
  PricingSection,
  BookingSection,
  QuestionsSection,
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
      <BookingSection />
      <FAQ />
      <QuestionsSection />
    </main>
  );
}
