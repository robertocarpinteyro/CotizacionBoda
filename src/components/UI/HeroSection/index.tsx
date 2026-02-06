'use client';
import { Wrapper, Inner, Pill, HeroTextContainer, DateBadge } from './styles';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>Videografía Cinematográfica de Bodas</span>
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <DateBadge>4 y 5 de Agosto</DateBadge>
        <GetStartedButton padding="1.25rem 2.5rem" href="#pricing">Ver Inversión</GetStartedButton>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
