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
    title: 'Doble Alcance',
    description: 'Combinamos 2 comunidades: tu marca y el talento/influencer para maximizar la visibilidad.',
  },
  {
    icon: '🎬',
    title: 'Contenido Auténtico',
    description: 'Videos UGC genuinos grabados en sucursal que conectan con la audiencia y generan confianza.',
  },
  {
    icon: '📈',
    title: 'Tendencias Actuales',
    description: 'Seguimos las tendencias del momento para maximizar el alcance orgánico y engagement.',
  },
  {
    icon: '🎯',
    title: 'Formato Orgánico',
    description: 'Contenido que se siente real y auténtico, perfecto para conectar con tu audiencia objetivo.',
  },
];

const InfluencerSection = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Reels UGC con Actores/Talentos</Title>
          <Subtitle>Contenido orgánico que genera confianza y engagement</Subtitle>
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
                Los reels UGC se graban en sucursal con actores, talentos o influencers, creando contenido
                orgánico y auténtico que sigue las tendencias actuales, potenciando la visualización al
                combinar tu marca con la comunidad del talento colaborador.
              </HighlightText>
            </HighlightBox>
          </TextColumn>
          <ImageColumn>
            <BathtubImage
              src="https://res.cloudinary.com/dwrtldhxd/video/upload/q_auto,w_1200,f_auto/v1765081678/AQM00fcFB9UXzP0XHk25z0YsAV6IQq-Q2WvI-l4X-5FOxbB0Y3ZBy5qfCKmYppNZ1uqC6NSFUTJdtATYZoxwS7VKBBgGy7hP7dEnq-g_2_zalvgb.mp4"
              alt="Reel UGC con actor/talento"
              aspectRatio="4/5"
              placeholder="Video UGC en sucursal"
            />
          </ImageColumn>
        </ContentGrid>
      </Container>
    </Wrapper>
  );
};

export default InfluencerSection;
