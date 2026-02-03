'use client';
import React, { useState } from 'react';
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
  Modal,
  ModalContent,
  CloseButton,
  ModalVideo,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
} from './styles';

const autoVideos = [
  {
    title: 'Auto Reel 1',
    videoUrl: 'https://scontent-sea1-1.cdninstagram.com/o1/v/t16/f2/m69/AQNFo7t3sBuYEy25-UxfMVLEJBIMaN7YVw2ink0yXCYp93Omvv-GZ73MUMeoAmJFZcsHxxE0YizrnCGq1ulPfB4f.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png',
  },
  {
    title: 'Auto Reel 2',
    videoUrl: 'https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m86/AQOPROH7EtC9FO3F5weLdM8rS91gvtxjk10Cd5nb6TAtV0_sS-PiQ5zKiFsQfW-i8vnb0x3N-XSF9YcTTMWGrEvukr11T4wZVFeaaAg.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png',
  },
  {
    title: 'Auto Reel 3',
    videoUrl: 'https://scontent-sea5-1.cdninstagram.com/o1/v/t2/f2/m86/AQPA61WHyXOu5lmTIIgZGch-epLnfVZnnBFGvmOZUOWlh8C0eJt3K57T-cpWo2q49oltqjpzfXcbRgP1KbIB-Gz6PTfrc4L_UBos_ZM.mp4',
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
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo('');
  };

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
              <VideoThumbnail onClick={() => openModal(video.videoUrl)}>
                <video
                  src={video.videoUrl}
                  poster={video.thumbnailUrl}
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

      {modalOpen && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalVideo
              autoPlay
              controls
              playsInline
            >
              <source src={currentVideo} type="video/mp4" />
            </ModalVideo>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default AutoReelsSection;
