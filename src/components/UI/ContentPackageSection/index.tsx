'use client';
import React from 'react';
import Image from 'next/image';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  Grid,
  Card,
  CardNumber,
  CardTitle,
  CardDescription,
  ImageContainer,
} from './styles';

const coverageItems = [
  {
    title: 'Getting Ready',
    description: 'Capturamos cada detalle de la preparación: maquillaje, vestido, emociones y esos momentos íntimos previos a la ceremonia con calidad cinematográfica.',
  },
  {
    title: 'Ceremonia',
    description: 'Filmamos cada instante de la ceremonia con múltiples ángulos y tomas aéreas con drone, como si fuera una escena de película.',
  },
  {
    title: 'Recepción',
    description: 'Desde el primer baile hasta la fiesta, documentamos toda la celebración con iluminación y encuadres profesionales. Hasta 10 hrs de cobertura.',
  },
  {
    title: 'Equipo Profesional',
    description: '2 Videógrafos profesionales, 1 Operador de drone certificado y 1 Staff de apoyo. Todo el equipo necesario para una producción cinematográfica.',
    imageUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770334085/WhatsApp_Image_2026-02-05_at_5.21.14_PM_ayu139.jpg',
  },
];

const ContentPackageSection = () => {
  return (
    <Wrapper id="cobertura">
      <Container>
        <Header>
          <Title>Cobertura Completa del Evento</Title>
          <Subtitle>2 Días de filmación cinematográfica &mdash; 4 y 5 de Agosto</Subtitle>
        </Header>
        <Grid>
          {coverageItems.map((item, index) => (
            <Card key={index}>
              <CardNumber>{String(index + 1).padStart(2, '0')}</CardNumber>
              {item.imageUrl && (
                <ImageContainer>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={800}
                    height={450}
                    style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', objectFit: 'cover' }}
                  />
                </ImageContainer>
              )}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default ContentPackageSection;
