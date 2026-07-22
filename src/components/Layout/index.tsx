'use client';

import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header } from '..';
import { LanguageProvider } from '@/i18n';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <LanguageProvider>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </LanguageProvider>
    </StyledComponentsRegistry>
  );
};

export default Layout;
