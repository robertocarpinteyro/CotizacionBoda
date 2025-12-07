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
    icon: '🎯',
    title: 'Estrategia Clara',
    description: 'Plan de contenido mensual bien definido con objetivos específicos para cada tipo de video.',
  },
  {
    icon: '📱',
    title: 'Optimizado para Instagram',
    description: 'Todo el contenido está diseñado específicamente para maximizar el engagement en Instagram.',
  },
  {
    icon: '🎨',
    title: 'Variedad de Formatos',
    description: 'Desde reels cinematográficos hasta motion graphics, ofrecemos contenido diverso y atractivo.',
  },
  {
    icon: '🚗',
    title: 'Enfoque Automotriz',
    description: 'Experiencia especializada en contenido para agencias de autos y concesionarios.',
  },
  {
    icon: '🌟',
    title: 'Spots Instagrameables',
    description: 'Capturamos tus vehículos en las mejores locaciones de la ciudad para contenido premium.',
  },
  {
    icon: '💎',
    title: 'Calidad Profesional',
    description: 'Producción de alta calidad con equipo profesional y edición cinematográfica.',
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
