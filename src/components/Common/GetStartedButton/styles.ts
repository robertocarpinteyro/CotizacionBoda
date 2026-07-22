'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--gold);
  color: var(--black);
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: var(--light-gold);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(201, 169, 110, 0.3);
  }
`;
