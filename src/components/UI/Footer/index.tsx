import Image from 'next/image';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Secciones',
    links: [
      { text: 'Cobertura', url: '#cobertura' },
      { text: 'Entregables', url: '#entregables' },
      { text: 'Demo', url: '#demo' },
    ],
  },
  {
    title: 'Información',
    links: [
      { text: 'Inversión', url: '#pricing' },
      { text: 'Preguntas Frecuentes', url: '#faq' },
      { text: 'Contacto', url: 'https://wa.me/52222172882?text=Me%20interesa%20la%20cotización%20de%20boda%20cinematográfica' },
    ],
  },
];

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
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--gold)' }}>Tu boda merece ser una película</h3>
                <p>Contáctanos para conocer más sobre nuestra propuesta de videografía cinematográfica para tu boda.</p>
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
              <h3>Español (México)</h3>
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              2026 Oasis Creativa. Todos los derechos reservados.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
