'use client';
import React from 'react';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  DemoVideoContainer,
  DemoVideoFrame,
  PromoSection,
  PromoCard,
  PromoIcon,
  PromoTitle,
  PromoDescription,
  PromoBadge,
  PromoGrid,
} from './styles';
import { useLanguage } from '@/i18n';

const AutoReelsSection = () => {
  const { t } = useLanguage();

  return (
    <Wrapper id="demo">
      <Container>
        <Header>
          <Title>{t.demo.title}</Title>
          <Subtitle>{t.demo.subtitle}</Subtitle>
        </Header>
        <DemoVideoContainer>
          <DemoVideoFrame
            src="https://drive.google.com/file/d/1AtBE8gsV4VG2UIUVbKNvwzLniZIjwzvT/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Demo Video - Cinematic Quality"
          />
        </DemoVideoContainer>

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
