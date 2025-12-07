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
  '8 videos mensuales distribuidos estratégicamente',
  '2 reels de festividades y actividades en sucursal',
  '6 reels de vehículos (3 por agencia + 3 cinematográficos)',
  '2 motion graphics promocionales',
  'Sesión de fotos para posts y stories',
  'Posibilidad de colaboración con influencers',
  'Potenciación de 3 comunidades (marca + agencia + influencer)',
  'Contenido optimizado para Instagram y redes sociales',
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
              <Price>$28,000</Price>
              <Period>MXN / mes</Period>
            </PriceTag>
            <CTAButton>Comenzar Ahora</CTAButton>
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
