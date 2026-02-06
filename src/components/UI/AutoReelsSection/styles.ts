import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 8rem 0;
  background: linear-gradient(180deg, #0f0f0f 0%, var(--Background) 100%);

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

export const DemoVideoContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 6rem;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 2px solid rgba(201, 169, 110, 0.3);
  box-shadow: 0 20px 60px rgba(201, 169, 110, 0.1);
  aspect-ratio: 16/9;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
    border-radius: 1rem;
  }
`;

export const DemoVideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const PromoSection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(201, 169, 110, 0.08) 0%, rgba(201, 169, 110, 0.02) 100%);
  border-radius: 2rem;
  border: 1px solid rgba(201, 169, 110, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(201, 169, 110, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const PromoBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 6.25rem;
  background: var(--gold);
  color: var(--black);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const PromoTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const PromoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const PromoCard = styled.div`
  padding: 2.5rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1.5rem;
  border: 1px solid rgba(201, 169, 110, 0.15);
  text-align: center;
  transition: all 0.3s ease;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--gold);
    margin-bottom: 1rem;
  }

  &:hover {
    border-color: var(--gold);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;

    h3 {
      font-size: 1.25rem;
    }
  }
`;

export const PromoIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const PromoDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Keep unused exports for backward compatibility
export const VideoGrid = styled.div``;
export const VideoCard = styled.div``;
export const VideoThumbnail = styled.div``;
export const PlayButton = styled.div``;
export const FeaturesGrid = styled.div``;
export const FeatureCard = styled.div``;
export const FeatureIcon = styled.div``;
export const FeatureTitle = styled.h3``;
export const FeatureDescription = styled.p``;
