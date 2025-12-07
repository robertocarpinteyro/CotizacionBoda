'use client';
import React from 'react';
import BathtubImage from '@/components/Common/BathtubImage';
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

const contentItems = [
  {
    title: 'Reels de Festividades',
    description: '2 reels mensuales de festividades o actividades en sucursal, incluyendo promociones especiales.',
    imageUrl: '',
  },
  {
    title: 'Reels por Auto Agencia',
    description: '3 reels destacando los diferentes vehículos disponibles en la agencia.',
    imageUrl: '',
  },
  {
    title: 'Reels Cinematográficos',
    description: '3 reels cinematográficos por unidad, capturados en spots instagrameables de la ciudad durante el recorrido.',
    imageUrl: '',
  },
  {
    title: 'Motion Graphics',
    description: '2 motion graphics promocionales con animaciones profesionales para destacar ofertas y promociones.',
    imageUrl: '',
  },
  {
    title: 'Videos en Sucursal',
    description: '3 videos mensuales de unidades por segmento, capturando interior y exterior en las instalaciones.',
    imageUrl: '',
  },
  {
    title: 'Contenido con Influencer',
    description: 'Posibilidad de ejecutar videos con influencers destacando la colaboración entre marca, agencia y creador.',
    imageUrl: '',
  },
  {
    title: 'Sesión de Fotos',
    description: 'Sesión fotográfica para posts y stories con influencer, con posibilidad de colaborar con Stylish.',
    imageUrl: '',
  },
  {
    title: 'Triple Comunidad',
    description: 'Potenciación de visualización juntando 3 grandes comunidades: marca, agencia de autos e influencer.',
    imageUrl: '',
  },
];

const ContentPackageSection = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Paquete de Contenido Mensual</Title>
          <Subtitle>8 Videos Distribuidos Estratégicamente</Subtitle>
        </Header>
        <Grid>
          {contentItems.map((item, index) => (
            <Card key={index}>
              <CardNumber>{String(index + 1).padStart(2, '0')}</CardNumber>
              <ImageContainer>
                <BathtubImage
                  src={item.imageUrl}
                  alt={item.title}
                  aspectRatio="16/9"
                  placeholder="Imagen pendiente"
                />
              </ImageContainer>
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
