import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 8rem 0;
  background: linear-gradient(180deg, var(--Background) 0%, #0f0f0f 100%);

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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1rem;
  border: 1px solid rgba(201, 169, 110, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(201, 169, 110, 0.05);
    border-color: rgba(201, 169, 110, 0.3);
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const Icon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
