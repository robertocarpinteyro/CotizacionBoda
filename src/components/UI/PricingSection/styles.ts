import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 8rem 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(43, 137, 46, 0.5), transparent);
  }

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

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RightColumn = styled.div``;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Highlight = styled.span`
  color: var(--green);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    right: 0;
    height: 0.75rem;
    background: var(--green);
    opacity: 0.2;
    z-index: -1;
  }
`;

export const PriceTag = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
`;

export const Price = styled.div`
  font-size: 4rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Period = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 3rem;
  background: var(--green);
  color: var(--white);
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 6.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: var(--emerald);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(43, 137, 46, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
    align-self: stretch;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const FeatureIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(43, 137, 46, 0.2);
  color: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
`;

export const FeatureText = styled.span`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
