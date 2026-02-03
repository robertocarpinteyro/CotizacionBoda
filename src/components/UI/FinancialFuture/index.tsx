'use client';
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  SVGCtn,
  Stats,
  Stat,
  Banner,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  stats,
  autoVideos,
} from './constants';

const FinancialFuture = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </>
          )}
        </Header>
        <Banner style={{ position: 'relative', width: '100%', padding: '0 5%', marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {autoVideos.map((video, i) => (
              <div key={i} style={{ position: 'relative', width: '100%', paddingBottom: '177.78%', borderRadius: '12px', overflow: 'hidden' }}>
                <video
                  controls
                  playsInline
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  poster={video.thumbnail}
                >
                  <source src={video.url} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            ))}
          </div>
        </Banner>
        <CardContainer>
          {cardsInfo.map((info, i) => (
            <Card key={i}>
              <TextCtn>
                <MaskText phrases={new Array(info.title)} tag="h3" />
                <MaskText phrases={new Array(info.details)} tag="p" />
              </TextCtn>
              <SVGCtn>
                <span style={{ fontSize: '2.5rem' }}>{info.icon}</span>
              </SVGCtn>
            </Card>
          ))}
        </CardContainer>
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h1" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
            </Stat>
          ))}
        </Stats>
      </Inner>
    </Wrapper>
  );
};

export default FinancialFuture;
