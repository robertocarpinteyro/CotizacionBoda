'use client';
import React from 'react';
import {
  Wrapper,
  Container,
  Grid,
  Card,
  Icon,
  Title,
  Description,
} from './styles';

const benefits = [
  {
    icon: '🎬',
    title: 'Calidad Cinematográfica',
    description: 'Filmamos tu boda como si fuera una película. Cada toma, cada encuadre y cada transición está pensada para crear una obra de arte visual.',
  },
  {
    icon: '🎥',
    title: 'Equipo Profesional de Cine',
    description: 'Cámaras de cine, lentes cinematográficos, estabilizadores y equipo de iluminación profesional para lograr ese look de película.',
  },
  {
    icon: '🚁',
    title: 'Tomas Aéreas con Drone',
    description: 'Operador de drone certificado para capturar tomas aéreas espectaculares de tu venue y ceremonia desde ángulos únicos.',
  },
  {
    icon: '🎞️',
    title: 'Color Grading Profesional',
    description: 'Post-producción con corrección de color cinematográfica que le da a tu video ese look de película de Hollywood.',
  },
  {
    icon: '🎵',
    title: 'Diseño Sonoro',
    description: 'Audio profesional con selección musical que complementa perfectamente cada momento emotivo de tu boda.',
  },
  {
    icon: '✨',
    title: 'Narrativa Emocional',
    description: 'No solo grabamos momentos, contamos tu historia de amor. Cada video tiene una narrativa que te hará revivir las emociones.',
  },
];

const BenefitsSection = () => {
  return (
    <Wrapper>
      <Container>
        <Grid>
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <Icon>{benefit.icon}</Icon>
              <Title>{benefit.title}</Title>
              <Description>{benefit.description}</Description>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default BenefitsSection;
