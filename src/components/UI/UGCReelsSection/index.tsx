'use client';
import React from 'react';
import Image from 'next/image';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  DeliverablesGrid,
  DeliverableCard,
  DeliverableImageContainer,
  DeliverableContent,
  DeliverableTitle,
  DeliverableDescription,
  DeliverableBadge,
} from './styles';
import { useLanguage } from '@/i18n';

const deliverableImages = [
  'https://res.cloudinary.com/dxcr9utre/image/upload/v1770334370/91ebce557df7d97b598c4084a77f100f-xxlarge_w1dddt.jpg',
  'https://res.cloudinary.com/dxcr9utre/image/upload/v1770334085/cd1fbe2511c34500d1c8a86399579a25-xxlarge_uzzrte.jpg',
  'https://res.cloudinary.com/dxcr9utre/image/upload/v1770334142/9837c6f78552d14f441722a0f80cafb0-xxlarge_x6grtm.jpg',
  null,
];

const UGCReelsSection = () => {
  const { t } = useLanguage();

  return (
    <Wrapper id="entregables">
      <Container>
        <Header>
          <Title>{t.deliverables.title}</Title>
          <Subtitle>{t.deliverables.subtitle}</Subtitle>
        </Header>
        <DeliverablesGrid>
          {t.deliverables.items.map((item, index) => (
            <DeliverableCard key={index}>
              {deliverableImages[index] && (
                <DeliverableImageContainer>
                  <Image
                    src={deliverableImages[index]!}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </DeliverableImageContainer>
              )}
              <DeliverableContent>
                <DeliverableBadge>{item.badge}</DeliverableBadge>
                <DeliverableTitle>{item.title}</DeliverableTitle>
                <DeliverableDescription>{item.description}</DeliverableDescription>
              </DeliverableContent>
            </DeliverableCard>
          ))}
        </DeliverablesGrid>
      </Container>
    </Wrapper>
  );
};

export default UGCReelsSection;
