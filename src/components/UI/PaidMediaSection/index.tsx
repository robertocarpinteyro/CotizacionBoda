'use client';
import React from 'react';
import BathtubImage from '@/components/Common/BathtubImage';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  ContentGrid,
  LeftColumn,
  RightColumn,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  HighlightBox,
  HighlightTitle,
  HighlightText,
} from './styles';

const services = [
  {
    icon: '🎯',
    title: 'Creación de Campañas',
    description: 'Diseño estratégico de campañas publicitarias en Meta (Facebook e Instagram) orientadas a resultados medibles.',
  },
  {
    icon: '👥',
    title: 'Segmentación Avanzada',
    description: 'Targeting preciso basado en demografía, intereses, comportamientos y audiencias personalizadas para maximizar el ROI.',
  },
  {
    icon: '📊',
    title: 'Optimización Continua',
    description: 'Monitoreo constante y ajustes basados en datos para mejorar el rendimiento de tus campañas en tiempo real.',
  },
  {
    icon: '💰',
    title: 'Gestión de Presupuesto',
    description: 'Distribución inteligente del presupuesto entre campañas y formatos para obtener el máximo retorno de inversión.',
  },
];

const PaidMediaSection = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Paid Media - Meta Ads</Title>
          <Subtitle>Maximiza tu alcance con publicidad estratégica en Facebook e Instagram</Subtitle>
        </Header>

        <ContentGrid>
          <LeftColumn>
            <BathtubImage
              src="https://res.cloudinary.com/dwrtldhxd/image/upload/w_1200,q_auto,f_auto/v1765090919/Captura_de_pantalla_2025-12-07_010129_qoefat.png"
              alt="Meta Ads Dashboard"
              aspectRatio="16/10"
              placeholder="Dashboard de Meta Ads"
            />
            <HighlightBox>
              <HighlightTitle>¿Por qué Meta Ads?</HighlightTitle>
              <HighlightText>
                Meta Ads te permite alcanzar a tu audiencia ideal en Facebook e Instagram,
                las plataformas con mayor engagement en México. Con segmentación avanzada
                y formatos diversos (stories, reels, feed), potenciamos tu contenido orgánico
                con alcance pagado estratégico.
              </HighlightText>
            </HighlightBox>
          </LeftColumn>

          <RightColumn>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <div>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </div>
              </ServiceCard>
            ))}
          </RightColumn>
        </ContentGrid>
      </Container>
    </Wrapper>
  );
};

export default PaidMediaSection;
