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
  'https://res.cloudinary.com/dxcr9utre/image/upload/v1784758724/e2895da1b7d6873ca6dbbf0506938e62-xlarge_hxpovb.jpg',
  'https://res.cloudinary.com/dxcr9utre/image/upload/v1784758724/0eace357ea4396e95a2d264cae0af972-xxlarge_gl5hfh.jpg',
  'https://res.cloudinary.com/dxcr9utre/image/upload/v1784758724/a4253ba2c762584d3879ded2c548e31e-xlarge_l6djtf.jpg',
  'https://res.cloudinary.com/dxcr9utre/image/upload/v1784758724/d6be689b31c87cf7fec63cb0647500ee-xlarge_etaspe.jpg',
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
