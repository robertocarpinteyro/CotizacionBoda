'use client';
import React from 'react';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  DemoVideoContainer,
  DemoVideo,
  PromoSection,
  PromoCard,
  PromoIcon,
  PromoTitle,
  PromoDescription,
  PromoBadge,
  PromoGrid,
} from './styles';
import { useLanguage } from '@/i18n';

const demoVideos = [
  'https://res.cloudinary.com/dxcr9utre/video/upload/v1784764831/26Abril_WeddingFilm_TizianayVladimir_2_1_y8ixqw.mp4',
  'https://res.cloudinary.com/dxcr9utre/video/upload/v1784764446/Marypaz_CasaVelo_2_u9stsr.mp4',
];

const AutoReelsSection = () => {
  const { t } = useLanguage();

  return (
    <Wrapper id="demo">
      <Container>
        <Header>
          <Title>{t.demo.title}</Title>
          <Subtitle>{t.demo.subtitle}</Subtitle>
        </Header>
        {demoVideos.map((videoSrc, index) => (
          <DemoVideoContainer key={index}>
            <DemoVideo
              controls
              playsInline
              preload="metadata"
              title={`Demo Video ${index + 1} - Cinematic Quality`}
            >
              <source src={videoSrc} type="video/mp4" />
            </DemoVideo>
          </DemoVideoContainer>
        ))}

        <PromoSection>
          <PromoBadge>{t.demo.promoBadge}</PromoBadge>
          <PromoTitle>{t.demo.promoTitle}</PromoTitle>
          <PromoGrid>
            {t.demo.promoCards.map((card, index) => (
              <PromoCard key={index}>
                <PromoIcon>{card.icon}</PromoIcon>
                <h3>{card.title}</h3>
                <PromoDescription>{card.description}</PromoDescription>
              </PromoCard>
            ))}
          </PromoGrid>
        </PromoSection>
      </Container>
    </Wrapper>
  );
};

export default AutoReelsSection;
