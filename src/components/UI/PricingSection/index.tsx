'use client';
import React from 'react';
import {
  Wrapper,
  Container,
  ContentGrid,
  LeftColumn,
  RightColumn,
  Title,
  PriceTag,
  Price,
  Period,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  Highlight,
  CTAButton,
  PaymentNote,
  PriceNote,
} from './styles';
import { useLanguage } from '@/i18n';

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <Wrapper id="pricing">
      <Container>
        <ContentGrid>
          <LeftColumn>
            <Title>
              {t.pricing.title} <Highlight>{t.pricing.titleHighlight}</Highlight>
            </Title>
            <PriceTag>
              <Price>{t.pricing.price}</Price>
              <Period>{t.pricing.currency}</Period>
            </PriceTag>
            <PaymentNote>
              {t.pricing.paymentNotes.map((note, index) => (
                <PriceNote key={index}>
                  <strong>{note.label}</strong> {note.value}
                </PriceNote>
              ))}
            </PaymentNote>
            <CTAButton as="a" href="https://wa.me/52222172882?text=Me%20interesa%20la%20cotización%20de%20boda%20cinematográfica" target="_blank" rel="noopener noreferrer">{t.pricing.cta}</CTAButton>
          </LeftColumn>
          <RightColumn>
            <FeaturesList>
              {t.pricing.features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureText>{feature}</FeatureText>
                </FeatureItem>
              ))}
            </FeaturesList>
          </RightColumn>
        </ContentGrid>
      </Container>
    </Wrapper>
  );
};

export default PricingSection;
