'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header } from '..';
import { LanguageProvider } from '@/i18n';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <LanguageProvider>
        <ReactLenis
          root
          easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
        >
          <GlobalStyles />
          <Header />
          {children}
          <Footer />
        </ReactLenis>
      </LanguageProvider>
    </StyledComponentsRegistry>
  );
};

export default Layout;
