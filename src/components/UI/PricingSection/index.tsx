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
} from './styles';

const features = [
  '6 reels mensuales distribuidos estratégicamente',
  '3 reels de auto con presentación de ficha técnica',
  '3 reels UGC con actores/talentos (puede incluir influencers)',
  '2 motion graphics promocionales',
  'Sesión de fotos para posts y stories',
  'Grabación en sucursal con contenido orgánico siguiendo tendencias',
  'Potenciación de 2 comunidades (tu marca + talento/influencer)',
  'Contenido optimizado para redes sociales',
];

const PricingSection = () => {
  return (
    <Wrapper id="pricing">
      <Container>
        <ContentGrid>
          <LeftColumn>
            <Title>
              Inversión en tu <Highlight>Presencia Digital</Highlight>
            </Title>
            <PriceTag>
              <Price>$7,000</Price>
              <Period>MXN / mes</Period>
            </PriceTag>
            <CTAButton as="a" href="https://wa.me/52222172882?text=Me%20interesa%20la%20propuesta%20de%20Oasis%20Creativa" target="_blank" rel="noopener noreferrer">Comenzar Ahora</CTAButton>
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
