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

const deliverables = [
  {
    title: '5 Reels para Redes Sociales',
    description: 'Hasta 40 segundos cada uno, optimizados para Instagram y TikTok. Contenido perfecto para compartir los mejores momentos de tu boda.',
    badge: '5 Videos',
    imageUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770334370/91ebce557df7d97b598c4084a77f100f-xxlarge_w1dddt.jpg',
  },
  {
    title: 'Video 4K Highlight',
    description: 'De 4 a 6 minutos con lo mejor de tu boda. Editado con calidad cinematográfica, color grading profesional y música que complementa cada momento.',
    badge: '4-6 min',
    imageUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770334085/WhatsApp_Image_2026-02-05_at_5.21.14_PM_ayu139.jpg',
  },
  {
    title: 'Cineminuto Highlights',
    description: 'Video de 1 minuto con los momentos más épicos de tu boda. Perfecto para compartir en redes sociales y revivir la emoción en un instante.',
    badge: '1 min',
    imageUrl: 'https://res.cloudinary.com/dxcr9utre/image/upload/v1770334142/9837c6f78552d14f441722a0f80cafb0-xxlarge_x6grtm.jpg',
  },
  {
    title: 'Entrega Digital + USB Físico',
    description: 'Landing page personalizada para ver y descargar tu contenido en cualquier momento, más una USB física con todo tu material en la más alta calidad.',
    badge: 'Digital + Físico',
    imageUrl: null,
  },
];

const UGCReelsSection = () => {
  return (
    <Wrapper id="entregables">
      <Container>
        <Header>
          <Title>Entregables</Title>
          <Subtitle>Todo lo que recibirás con tu paquete cinematográfico</Subtitle>
        </Header>
        <DeliverablesGrid>
          {deliverables.map((item, index) => (
            <DeliverableCard key={index}>
              {item.imageUrl && (
                <DeliverableImageContainer>
                  <Image
                    src={item.imageUrl}
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
