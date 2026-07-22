'use client';
import { Wrapper, Inner, Pill, HeroTextContainer, DateBadge } from './styles';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { useLanguage } from '@/i18n';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>{t.hero.pill}</span>
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={[...t.hero.mobilePhrases]} tag="h1" />
              <MaskText phrases={[...t.hero.mobileParagraphPhrases]} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={[...t.hero.phrases]} tag="h1" />
              <MaskText phrases={[...t.hero.paragraphPhrases]} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <DateBadge>{t.hero.dateBadge}</DateBadge>
        <GetStartedButton padding="1.25rem 2.5rem" href="#pricing">{t.hero.cta}</GetStartedButton>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
