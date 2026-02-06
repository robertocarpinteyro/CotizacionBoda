'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem 0;
  background-color: rgba(10, 9, 8, 0.95);
  border-bottom: 0.5px solid rgba(201, 169, 110, 0.3);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  position: relative;

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AbsoluteLinks = styled(Link)``;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
