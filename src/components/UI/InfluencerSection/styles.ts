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
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ImageColumn = styled.div`
  position: sticky;
  top: 2rem;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
`;

export const BenefitCard = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(43, 137, 46, 0.05) 0%, rgba(43, 137, 46, 0.02) 100%);
  border-radius: 1rem;
  border: 1px solid rgba(43, 137, 46, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(43, 137, 46, 0.5);
    transform: translateX(8px);
    background: linear-gradient(135deg, rgba(43, 137, 46, 0.1) 0%, rgba(43, 137, 46, 0.05) 100%);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

export const BenefitIcon = styled.div`
  font-size: 2.5rem;
  line-height: 1;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const BenefitDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const HighlightBox = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, rgba(43, 137, 46, 0.15) 0%, rgba(43, 137, 46, 0.05) 100%);
  border-radius: 1rem;
  border-left: 4px solid var(--green);
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const HighlightText = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
