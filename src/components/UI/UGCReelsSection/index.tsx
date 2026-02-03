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

const ugcVideos = [
  {
    title: 'Reel UGC 1',
    videoUrl: 'https://www.tiktok.com/@panamotorspremiumoficial/video/7595977834129100050',
    thumbnailUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png',
  },
  {
    title: 'Reel UGC 2',
    videoUrl: 'https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m86/AQOuFfmzM2U6Gg_gfcGOgMAKT9Th9Owudiqnjac8Bg1hXLc_f8LJ4zLRKHwARVGCC1dfLTso3icHVWqw0XpofVQFupW8RXZUC6KTjKw.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png',
  },
  {
    title: 'Reel UGC 3',
    videoUrl: 'https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m86/AQOVbgomwa4VYss2IHPFsuaEJ89uj8_rO20H9WW2W2FlNsued_jsPzFjHS8vrkaAQZ8FJBN2KJe1WOVqjQreaDQB5z6VZbi4OCau-qg.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png',
  },
];

const features = [
  {
    icon: '🎬',
    title: 'Contenido Auténtico',
    description: 'Videos UGC que se sienten reales y generan mayor confianza con tu audiencia objetivo.',
  },
  {
    icon: '📈',
    title: 'Tendencias Actuales',
    description: 'Aprovechamos las tendencias del momento para maximizar el alcance orgánico de tu contenido.',
  },
  {
    icon: '💬',
    title: 'Mayor Engagement',
    description: 'El formato UGC genera 4x más interacción que el contenido tradicional de marca.',
  },
];

const UGCReelsSection = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Reels UGC</Title>
          <Subtitle>Grabamos con actores o talentos en sucursal videos &ldquo;orgánicos&rdquo; (UGC) trends</Subtitle>
        </Header>
        <VideoGrid>
          {ugcVideos.map((video, index) => (
            <VideoCard key={index}>
              <VideoThumbnail as="a" href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                <video
                  src={video.videoUrl}
                  poster={video.thumbnailUrl}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
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

export default UGCReelsSection;
