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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: var(--green);
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(43, 137, 46, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CardNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--green);
  opacity: 0.2;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
