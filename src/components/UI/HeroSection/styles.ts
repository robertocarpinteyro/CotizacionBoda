'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 5rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(201, 169, 110, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid rgba(201, 169, 110, 0.5);
  background: rgba(201, 169, 110, 0.1);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: var(--gold);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 5.5rem;
    font-weight: 300;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #ffffff 0%, var(--gold) 50%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Título línea 1 ("Tu Boda"): Dancing Script con glow */
  > div:first-child > div:first-child h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 7rem;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.1;
    background: none;
    -webkit-background-clip: border-box;
    background-clip: border-box;
    -webkit-text-fill-color: var(--light-gold);
    color: var(--light-gold);
    text-shadow: 0 0 18px rgba(201, 169, 110, 0.75),
      0 0 42px rgba(201, 169, 110, 0.45),
      0 0 72px rgba(201, 169, 110, 0.25);
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0 auto;
    letter-spacing: 0.02em;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 2.75rem;
      font-weight: 300;
    }

    > div:first-child > div:first-child h1 {
      font-size: 3.75rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const DateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 6.25rem;
  border: 1px solid rgba(201, 169, 110, 0.3);
  background: rgba(201, 169, 110, 0.08);
  color: var(--gold);
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
`;
