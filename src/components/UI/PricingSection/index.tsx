'use client';
import React from 'react';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Highlight,
  Subtitle,
  PackagesGrid,
  PackageCard,
  FeaturedBadge,
  PackageName,
  PackageDescription,
  PriceTag,
  Price,
  Period,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  CTAButton,
  PaymentNote,
} from './styles';
import { useLanguage } from '@/i18n';

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <Wrapper id="pricing">
      <Container>
        <Header>
          <Title>
            {t.pricing.title} <Highlight>{t.pricing.titleHighlight}</Highlight>
          </Title>
          <Subtitle>{t.pricing.subtitle}</Subtitle>
        </Header>
        <PackagesGrid>
          {t.pricing.packages.map((pkg, index) => (
            <PackageCard key={index} $featured={pkg.featured}>
              {pkg.featured && <FeaturedBadge>Popular</FeaturedBadge>}
              <PackageName>{pkg.name}</PackageName>
              <PriceTag>
                <Price>{pkg.price}</Price>
                <Period>{pkg.currency}</Period>
              </PriceTag>
              <PackageDescription>{pkg.description}</PackageDescription>
              <CTAButton
                as="a"
                href="https://wa.me/52222172882?text=Me%20interesa%20la%20cotización%20de%20boda%20cinematográfica"
                target="_blank"
                rel="noopener noreferrer"
                $featured={pkg.featured}
              >
                {t.pricing.cta}
              </CTAButton>
              <FeaturesList>
                {pkg.features.map((feature, i) => (
                  <FeatureItem key={i}>
                    <FeatureIcon $featured={pkg.featured}>✓</FeatureIcon>
                    <FeatureText>{feature}</FeatureText>
                  </FeatureItem>
                ))}
              </FeaturesList>
            </PackageCard>
          ))}
        </PackagesGrid>
        <PaymentNote>{t.pricing.paymentNote}</PaymentNote>
      </Container>
    </Wrapper>
  );
};

export default PricingSection;
