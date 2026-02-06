'use client';
import React from 'react';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  DemoVideoContainer,
  DemoVideoFrame,
  PromoSection,
  PromoCard,
  PromoIcon,
  PromoTitle,
  PromoDescription,
  PromoBadge,
  PromoGrid,
} from './styles';

const AutoReelsSection = () => {
  return (
    <Wrapper id="demo">
      <Container>
        <Header>
          <Title>Nuestra Calidad Cinematográfica</Title>
          <Subtitle>Mira un ejemplo de cómo filmamos. Cada boda es una película.</Subtitle>
        </Header>
        <DemoVideoContainer>
          <DemoVideoFrame
            src="https://drive.google.com/file/d/1AtBE8gsV4VG2UIUVbKNvwzLniZIjwzvT/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Demo Video - Calidad Cinematográfica"
          />
        </DemoVideoContainer>

        <PromoSection>
          <PromoBadge>Promoción Especial</PromoBadge>
          <PromoTitle>Aparta este mes y obtén de regalo</PromoTitle>
          <PromoGrid>
            <PromoCard>
              <PromoIcon>📸</PromoIcon>
              <h3>30 Fotografías Profesionales</h3>
              <PromoDescription>
                Incluidas en tu paquete sin costo adicional. 30 fotografías editadas profesionalmente de los mejores momentos de tu boda.
              </PromoDescription>
            </PromoCard>
            <PromoCard>
              <PromoIcon>💌</PromoIcon>
              <h3>Invitaciones Digitales</h3>
              <PromoDescription>
                Landing page personalizada con formulario de asistencia para tus invitados. Envía invitaciones por correo electrónico a tus seres queridos de forma elegante y moderna.
              </PromoDescription>
            </PromoCard>
          </PromoGrid>
        </PromoSection>
      </Container>
    </Wrapper>
  );
};

export default AutoReelsSection;
