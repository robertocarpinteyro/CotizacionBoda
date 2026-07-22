'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  LangToggle,
} from './styles';
import { GetStartedButton } from '@/components';
import { useLanguage } from '@/i18n';
import { WHATSAPP_URL } from '@/config/contact';

const Header = () => {
  const { t, locale, toggleLanguage } = useLanguage();

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
          <a href="#cobertura">{t.header.coverage}</a>
          <a href="#entregables">{t.header.deliverables}</a>
          <a href="#demo">{t.header.demo}</a>
          <a href="#pricing">{t.header.investment}</a>
          <a href="#agendar">{t.header.booking}</a>
          <a href="#faq">{t.header.faq}</a>
        </Nav>
        <CallToActions>
          <LangToggle onClick={toggleLanguage}>
            {locale === 'es' ? 'EN' : 'ES'}
          </LangToggle>
          <GetStartedButton padding="0.75rem 1.5rem" href={WHATSAPP_URL}>{t.header.whatsapp}</GetStartedButton>
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
