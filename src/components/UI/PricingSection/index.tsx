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

const features = [
  'Cobertura completa de 2 días (4 y 5 de Agosto)',
  'Getting ready, ceremonia y recepción (hasta 10 hrs por día)',
  '2 Videógrafos profesionales',
  '1 Operador de drone certificado',
  '1 Staff de apoyo en producción',
  '5 Reels de hasta 40 seg para redes sociales',
  'Video 4K Highlight de 4-6 minutos',
  'Cineminuto Highlights de 1 minuto',
  'Entrega digital en landing page personalizada',
  'Entrega en USB físico y digital',
];

const PricingSection = () => {
  return (
    <Wrapper id="pricing">
      <Container>
        <ContentGrid>
          <LeftColumn>
            <Title>
              Inversión en tu <Highlight>Historia de Amor</Highlight>
            </Title>
            <PriceTag>
              <Price>$85,000</Price>
              <Period>MXN</Period>
            </PriceTag>
            <PaymentNote>
              <PriceNote>
                <strong>Transferencia o Tarjeta de Crédito:</strong> $85,000 + IVA
              </PriceNote>
              <PriceNote>
                <strong>Pago en Efectivo:</strong> $85,000 (sin IVA)
              </PriceNote>
            </PaymentNote>
            <CTAButton as="a" href="https://wa.me/52222172882?text=Me%20interesa%20la%20cotización%20de%20boda%20cinematográfica" target="_blank" rel="noopener noreferrer">Apartar Ahora</CTAButton>
          </LeftColumn>
          <RightColumn>
            <FeaturesList>
              {features.map((feature, index) => (
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
