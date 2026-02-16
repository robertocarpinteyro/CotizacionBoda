'use client';
import Image from 'next/image';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';
import { useLanguage } from '@/i18n';

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  TextCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  const { t } = useLanguage();

  const linksArr = [
    {
      title: t.footer.sections,
      links: [
        { text: t.header.coverage, url: '#cobertura' },
        { text: t.header.deliverables, url: '#entregables' },
        { text: t.header.demo, url: '#demo' },
      ],
    },
    {
      title: t.footer.information,
      links: [
        { text: t.header.investment, url: '#pricing' },
        { text: t.header.faq, url: '#faq' },
        { text: t.footer.contact, url: 'https://wa.me/52222172882?text=Me%20interesa%20la%20cotización%20de%20boda%20cinematográfica' },
      ],
    },
  ];

  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: '700' }}>OASIS CREATIVA</h2>
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <TextCtn>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--gold)' }}>{t.footer.tagline}</h3>
                <p>{t.footer.description}</p>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, j) => (
                      <li key={j}>
                        <a href={link.url} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>{t.footer.lang}</h3>
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              {t.footer.copyright}
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
