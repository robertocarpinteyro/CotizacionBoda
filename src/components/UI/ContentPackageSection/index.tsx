'use client';
import React from 'react';
import Image from 'next/image';
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
import { useLanguage } from '@/i18n';

const teamImageUrl = 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770334085/WhatsApp_Image_2026-02-05_at_5.21.14_PM_ayu139.jpg';

const ContentPackageSection = () => {
  const { t } = useLanguage();

  return (
    <Wrapper id="cobertura">
      <Container>
        <Header>
          <Title>{t.coverage.title}</Title>
          <Subtitle>{t.coverage.subtitle}</Subtitle>
        </Header>
        <Grid>
          {t.coverage.items.map((item, index) => (
            <Card key={index}>
              <CardNumber>{String(index + 1).padStart(2, '0')}</CardNumber>
              {index === 3 && (
                <ImageContainer>
                  <Image
                    src={teamImageUrl}
                    alt={item.title}
                    width={800}
                    height={450}
                    style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', objectFit: 'cover' }}
                  />
                </ImageContainer>
              )}
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
