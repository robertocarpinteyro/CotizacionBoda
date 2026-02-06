'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
} from './styles';
import { GetStartedButton } from '@/components';

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image
            src="https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png"
            alt="Oasis Creativa"
            width={50}
            height={50}
            priority
          />
        </LogoContainer>
        <Nav>
          <a href="#cobertura">Cobertura</a>
          <a href="#entregables">Entregables</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Inversión</a>
          <a href="#faq">FAQ</a>
        </Nav>
        <CallToActions>
          <GetStartedButton padding="0.75rem 1.5rem" href="#pricing">Ver Inversión</GetStartedButton>
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
