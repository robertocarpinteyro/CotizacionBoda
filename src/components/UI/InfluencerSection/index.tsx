'use client';
import React from 'react';
import BathtubImage from '@/components/Common/BathtubImage';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  ContentGrid,
  TextColumn,
  ImageColumn,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitDescription,
  HighlightBox,
  HighlightText,
} from './styles';

const benefits = [
  {
    icon: '👥',
    title: 'Triple Alcance',
    description: 'Combinamos 3 comunidades: Zenith Motors, marca de autos e influencer para maximizar la visibilidad.',
  },
  {
    icon: '📸',
    title: 'Sesión Profesional',
    description: 'Sesión de fotos en exteriores con influencer para posts y stories de alta calidad.',
  },
  {
    icon: '🎬',
    title: 'Contenido Auténtico',
    description: 'Videos genuinos que conectan con la audiencia y generan confianza en tu marca.',
  },
  {
    icon: '✨',
    title: 'Posibilidad con Stylist',
    description: 'Oportunidad de colaborar con creadores destacados como Stylist para mayor impacto.',
  },
];

const InfluencerSection = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Colaboraciones con Influencers</Title>
          <Subtitle>Potencia tu marca con creadores de contenido</Subtitle>
        </Header>
        <ContentGrid>
          <TextColumn>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <div>
                  <BenefitTitle>{benefit.title}</BenefitTitle>
                  <BenefitDescription>{benefit.description}</BenefitDescription>
                </div>
              </BenefitCard>
            ))}
            <HighlightBox>
              <HighlightText>
                Los videos tienen la posibilidad de ejecutarse con influencer, destacando la colaboración
                entre la marca (agencia), marca de auto e influencer como marca, potenciando la
                visualización del contenido.
              </HighlightText>
            </HighlightBox>
          </TextColumn>
          <ImageColumn>
            <BathtubImage
              src="https://res.cloudinary.com/dwrtldhxd/video/upload/q_auto,w_1200,f_auto/v1765081678/AQM00fcFB9UXzP0XHk25z0YsAV6IQq-Q2WvI-l4X-5FOxbB0Y3ZBy5qfCKmYppNZ1uqC6NSFUTJdtATYZoxwS7VKBBgGy7hP7dEnq-g_2_zalvgb.mp4"
              alt="Colaboración con influencer"
              aspectRatio="4/5"
              placeholder="Video de colaboración con influencer"
            />
          </ImageColumn>
        </ContentGrid>
      </Container>
    </Wrapper>
  );
};

export default InfluencerSection;
