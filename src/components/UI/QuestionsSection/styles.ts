'use client';
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 6rem 0 8rem;
  background: var(--Background);

  @media (max-width: 768px) {
    padding: 3rem 0 4rem;
  }
`;

export const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.75rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.15rem;
  color: var(--light-gray);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
