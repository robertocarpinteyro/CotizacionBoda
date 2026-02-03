import Image from 'next/image';
import raft_footer_logo from '../../../../public/svgs/raft_footer_logo.svg';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Servicios',
    links: [
      { text: 'Contenido Digital', url: '#paquete' },
      { text: 'Reels & Videos', url: '#paquete' },
      { text: 'Motion Graphics', url: '#paquete' },
    ],
  },
  {
    title: 'Información',
    links: [
      { text: 'Sobre la Propuesta', url: '#' },
      { text: 'Portafolio', url: '#' },
      { text: 'Contacto', url: 'mailto:contacto@oasiscreativa.com' },
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
  QRImageCtn,
  TextCtn,
  IconCtn,
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
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>¿Listo para impulsar tu presencia digital?</h3>
                <p>Contáctanos para conocer más sobre nuestra propuesta de contenido para Zenith Motors.</p>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>
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
              2024 Propuesta Zenith Motors. Todos los derechos reservados.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
