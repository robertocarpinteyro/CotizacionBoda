'use client';
import React from 'react';
import BathtubImage from '@/components/Common/BathtubImage';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  VideoGrid,
  VideoCard,
  VideoTitle,
} from './styles';

const portfolioVideos = [
  {
    title: 'Contenido Automotriz Premium',
    videoUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/q_auto,w_1200,f_auto/v1765080386/V3_1_qfg6xy.mp4',
  },
  {
    title: 'Producción Cinematográfica',
    videoUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/q_auto,w_1200,f_auto/v1765080386/V3_1_qfg6xy.mp4',
  },
  {
    title: 'Colaboraciones con Marcas',
    videoUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/q_auto,w_1200,f_auto/v1765080386/V3_1_qfg6xy.mp4',
  },
];

const PortfolioSection = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Nuestro Trabajo</Title>
          <Subtitle>Experiencia creando contenido automotriz de alta calidad</Subtitle>
        </Header>
        <VideoGrid>
          {portfolioVideos.map((video, index) => (
            <VideoCard key={index}>
              <BathtubImage
                src={video.videoUrl}
                alt={video.title}
                aspectRatio="9/16"
                objectFit="cover"
              />
              <VideoTitle>{video.title}</VideoTitle>
            </VideoCard>
          ))}
        </VideoGrid>
      </Container>
    </Wrapper>
  );
};

export default PortfolioSection;
