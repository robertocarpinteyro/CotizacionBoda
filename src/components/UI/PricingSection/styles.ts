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
    background: linear-gradient(90deg, transparent, rgba(201, 169, 110, 0.5), transparent);
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
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
    margin-bottom: 2.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Highlight = styled.span`
  color: var(--gold);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0.3rem;
    left: 0;
    right: 0;
    height: 0.5rem;
    background: var(--gold);
    opacity: 0.2;
    z-index: -1;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 380px));
  justify-content: center;
  gap: 2rem;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
    gap: 2rem;
  }
`;

export const PackageCard = styled.div<{ $featured?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  border-radius: 1.5rem;
  border: ${({ $featured }) =>
    $featured
      ? '2px solid var(--gold)'
      : '1px solid rgba(255, 255, 255, 0.1)'};
  background: ${({ $featured }) =>
    $featured
      ? 'linear-gradient(135deg, rgba(201, 169, 110, 0.1) 0%, rgba(10, 9, 8, 0.95) 100%)'
      : 'linear-gradient(135deg, #141414 0%, #0c0c0c 100%)'};
  position: relative;
  transition: all 0.3s ease;
  transform: ${({ $featured }) => ($featured ? 'scale(1.03)' : 'none')};
  box-shadow: ${({ $featured }) =>
    $featured ? '0 16px 48px rgba(201, 169, 110, 0.15)' : 'none'};

  &:hover {
    border-color: var(--gold);
    transform: ${({ $featured }) =>
      $featured ? 'scale(1.05)' : 'translateY(-6px)'};
    box-shadow: 0 12px 36px rgba(201, 169, 110, 0.12);
  }

  @media (max-width: 1024px) {
    transform: none;

    &:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: -0.875rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.375rem 1.5rem;
  background: var(--gold);
  color: var(--black);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 6.25rem;
`;

export const PackageName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const PriceTag = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const Price = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Period = styled.div`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
`;

export const OldPrice = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1;
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.55);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const OfferTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin-bottom: 1rem;
`;

export const OfferPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  font-size: 3rem;
  font-weight: 800;
  color: var(--light-gold);
  line-height: 1;
  text-shadow: 0 0 16px rgba(201, 169, 110, 0.8),
    0 0 34px rgba(201, 169, 110, 0.5),
    0 0 60px rgba(201, 169, 110, 0.3);

  span {
    font-size: 1.125rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
    text-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const OfferNote = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--light-gold);
  text-transform: uppercase;
`;

export const PackageDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

export const CTAButton = styled.button<{ $featured?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: ${({ $featured }) =>
    $featured ? 'var(--gold)' : 'transparent'};
  color: ${({ $featured }) =>
    $featured ? 'var(--black)' : 'var(--gold)'};
  border: ${({ $featured }) =>
    $featured ? 'none' : '1px solid var(--gold)'};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-bottom: 2rem;
  width: 100%;

  &:hover {
    background: ${({ $featured }) =>
      $featured ? 'var(--light-gold)' : 'rgba(201, 169, 110, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 169, 110, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const FeatureIcon = styled.div<{ $featured?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${({ $featured }) =>
    $featured ? 'rgba(201, 169, 110, 0.25)' : 'rgba(255, 255, 255, 0.08)'};
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
`;

export const FeatureText = styled.span`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
`;

export const PaymentNote = styled.p`
  text-align: center;
  margin-top: 3rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 0.9rem;
  }
`;
