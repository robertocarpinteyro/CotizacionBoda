import Image from 'next/image';
import raft_footer_logo from '../../../../public/svgs/raft_footer_logo.svg';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Paquete',
    links: ['Cobertura 2 Días', 'Equipo Profesional', 'Calidad 4K'],
  },
  {
    title: 'Entregables',
    links: ['5 Reels Sociales', 'Video Highlight 4K', 'Cineminto 1 Min', 'Landing Page', 'USB Físico'],
  },
  {
    title: 'Soporte',
    links: ['FAQ', 'Preguntas Frecuentes', 'Contacto'],
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
          <Image
            src="https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png"
            alt="Oasis Creativa"
            width={80}
            height={80}
          />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <TextCtn style={{width: '100%'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Videografía Cinematográfica</h3>
                <p>Tu boda filmada como una película. Calidad 4K profesional.</p>
                <p style={{marginTop: '1rem'}}>📧 info@videografiabodas.com</p>
                <p>📱 Contacta para más información</p>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>Español (México)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              Videografía Cinematográfica 2026
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
