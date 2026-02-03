'use client';
import React from 'react';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  VideoGrid,
  VideoCard,
  VideoThumbnail,
  PlayButton,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
} from './styles';

const autoVideos = [
  {
    title: 'Auto Reel 1',
    videoUrl: 'https://res.cloudinary.com/dxcr9utre/video/upload/v1770152986/AQOPROH7EtC9FO3F5weLdM8rS91gvtxjk10Cd5nb6TAtV0_sS-PiQ5zKiFsQfW-i8vnb0x3N-XSF9YcTTMWGrEvukr11T4wZVFeaaAg_o1kcqj.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png',
  },
  {
    title: 'Auto Reel 2',
    videoUrl: 'https://res.cloudinary.com/dxcr9utre/video/upload/v1770152990/AQNFo7t3sBuYEy25-UxfMVLEJBIMaN7YVw2ink0yXCYp93Omvv-GZ73MUMeoAmJFZcsHxxE0YizrnCGq1ulPfB4f_b51icm.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png',
  },
  {
    title: 'Auto Reel 3',
    videoUrl: 'https://res.cloudinary.com/dxcr9utre/video/upload/v1770153150/AQPA61WHyXOu5lmTIIgZGch-epLnfVZnnBFGvmOZUOWlh8C0eJt3K57T-cpWo2q49oltqjpzfXcbRgP1KbIB-Gz6PTfrc4L_UBos_ZM_owl4mg.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png',
  },
];

const features = [
  {
    icon: '🚗',
    title: 'Ficha Técnica Visual',
    description: 'Presentamos cada unidad con sus especificaciones clave de forma atractiva y dinámica.',
  },
  {
    icon: '🎥',
    title: 'Alta Calidad',
    description: 'Videos cinematográficos que destacan lo mejor de cada vehículo y captan la atención.',
  },
  {
    icon: '💰',
    title: 'Optimizado para Ventas',
    description: 'Contenido diseñado específicamente para convertir espectadores en compradores potenciales.',
  },
];

const AutoReelsSection = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Destacar las Unidades en Venta</Title>
          <Subtitle>Presentación cinematográfica de fichas técnicas</Subtitle>
        </Header>
        <VideoGrid>
          {autoVideos.map((video, index) => (
            <VideoCard key={index}>
              <VideoThumbnail as="a" href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                <video
                  src={video.videoUrl}
                  poster={video.thumbnailUrl}
                  muted
                  loop
                  playsInline
                  crossOrigin="anonymous"
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <PlayButton>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M16 12L34 24L16 36V12Z" fill="white"/>
                  </svg>
                </PlayButton>
              </VideoThumbnail>
            </VideoCard>
          ))}
        </VideoGrid>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </Wrapper>
  );
};

export default AutoReelsSection;
