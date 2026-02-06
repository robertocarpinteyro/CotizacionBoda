import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 8rem 0;
  background: var(--Background);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--light-gray);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const DeliverablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const DeliverableCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(201, 169, 110, 0.15);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--gold);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(201, 169, 110, 0.15);
  }
`;

export const DeliverableImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
`;

export const DeliverableContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const DeliverableBadge = styled.span`
  display: inline-block;
  padding: 0.375rem 1rem;
  border-radius: 6.25rem;
  background: rgba(201, 169, 110, 0.15);
  color: var(--gold);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
`;

export const DeliverableTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const DeliverableDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Keep these exports for backward compatibility with barrel file
export const VideoGrid = styled.div``;
export const VideoCard = styled.div``;
export const VideoThumbnail = styled.div``;
export const PlayButton = styled.div``;
export const FeaturesGrid = styled.div``;
export const FeatureCard = styled.div``;
export const FeatureIcon = styled.div``;
export const FeatureTitle = styled.h3``;
export const FeatureDescription = styled.p``;
