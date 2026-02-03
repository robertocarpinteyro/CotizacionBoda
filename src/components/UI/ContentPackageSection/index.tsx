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
    title: 'Reels de Auto (Ficha Técnica)',
    description: '3 reels mensuales destacando las unidades en venta con presentación de ficha técnica.',
    imageUrl: 'https://res.cloudinary.com/dwrtldhxd/image/upload/w_800,q_auto,f_auto/v1765080933/DSC06477_fzuo6v.jpg',
  },
  {
    title: 'Reels UGC con Actor/Talento',
    description: '3 reels orgánicos grabados en sucursal con actores, talentos o influencers siguiendo tendencias.',
    imageUrl: 'https://res.cloudinary.com/dwrtldhxd/image/upload/w_800,q_auto,f_auto/v1765080931/DSC01193_eevl9p.jpg',
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
