'use client';
import React, { useState } from 'react';
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
  VideoThumbnail,
  PlayButton,
  Modal,
  ModalContent,
  CloseButton,
  ModalVideo,
} from './styles';

const portfolioVideos = [
  {
    title: 'Motion Graphics',
    videoUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/q_auto,w_1200,f_auto/v1765085774/storydiapadre_Cuadrado_i4t0qb.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/so_0/q_auto,w_800,f_auto/v1765085774/storydiapadre_Cuadrado_i4t0qb.jpg',
    type: 'modal',
  },
  {
    title: 'Color Grading Profesional',
    videoUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/q_auto,w_1200,f_auto/v1765080391/SECURITEReel1_ao3dg1.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/so_0/q_auto,w_800,f_auto/v1765080391/SECURITEReel1_ao3dg1.jpg',
    type: 'modal',
  },
  {
    title: 'Calidad Premium',
    videoUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/q_auto,w_1200,f_auto/v1765081678/AQM00fcFB9UXzP0XHk25z0YsAV6IQq-Q2WvI-l4X-5FOxbB0Y3ZBy5qfCKmYppNZ1uqC6NSFUTJdtATYZoxwS7VKBBgGy7hP7dEnq-g_2_zalvgb.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dwrtldhxd/video/upload/so_0/q_auto,w_800,f_auto/v1765081678/AQM00fcFB9UXzP0XHk25z0YsAV6IQq-Q2WvI-l4X-5FOxbB0Y3ZBy5qfCKmYppNZ1uqC6NSFUTJdtATYZoxwS7VKBBgGy7hP7dEnq-g_2_zalvgb.jpg',
    type: 'modal',
  },
];

const PortfolioSection = () => {
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
          <Title>Nuestro Trabajo</Title>
          <Subtitle>Experiencia creando contenido automotriz de alta calidad</Subtitle>
        </Header>
        <VideoGrid>
          {portfolioVideos.map((video, index) => (
            <VideoCard key={index}>
              <VideoThumbnail onClick={() => openModal(video.videoUrl)}>
                <img src={video.thumbnailUrl} alt={video.title} />
                <PlayButton>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M16 12L34 24L16 36V12Z" fill="white"/>
                  </svg>
                </PlayButton>
              </VideoThumbnail>
              <VideoTitle>{video.title}</VideoTitle>
            </VideoCard>
          ))}
        </VideoGrid>
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

export default PortfolioSection;
