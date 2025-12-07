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
    description: '2 reels mensuales de festividades o actividades especiales, incluyendo promociones.',
    imageUrl: 'https://res.cloudinary.com/dwrtldhxd/image/upload/w_800,q_auto,f_auto/v1765089339/Gemini_Generated_Image_xo55bpxo55bpxo55_khuavb.png',
  },
  {
    title: 'Reels de Productos/Servicios',
    description: '3 reels destacando tus productos o servicios de manera creativa y atractiva.',
    imageUrl: 'https://res.cloudinary.com/dwrtldhxd/image/upload/w_800,q_auto,f_auto/v1765124487/Zenith_Agosto_-41_byjgxy.jpg',
  },
  {
    title: 'Reels Cinematográficos',
    description: '3 reels cinematográficos capturados en spots instagrameables de la ciudad durante el recorrido.',
    imageUrl: 'https://res.cloudinary.com/dwrtldhxd/image/upload/w_800,q_auto,f_auto/v1765124488/Zenith_Agosto_-22_rbprxo.jpg',
  },
  {
    title: 'Motion Graphics',
    description: '2 motion graphics promocionales con animaciones profesionales para destacar ofertas y promociones.',
    imageUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/q_auto,w_800,f_auto/v1765085774/storydiapadre_Cuadrado_i4t0qb.mp4',
  },
  {
    title: 'Sesión de Fotos',
    description: 'Sesión fotográfica para posts y stories con influencer, con posibilidad de colaborar con Stylist.',
    imageUrl: 'https://res.cloudinary.com/dwrtldhxd/image/upload/w_800,q_auto,f_auto/v1765086086/vlcsnap-2025-12-06-23h40m04s817_lahlyo.png',
  },
];

const ContentPackageSection = () => {
  return (
    <Wrapper id="paquete">
      <Container>
        <Header>
          <Title>Paquete de Contenido Mensual</Title>
          <Subtitle>Contenido Estratégico para Redes Sociales</Subtitle>
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
