'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  BannerCtn,
  Edges,
  Edge,
  Title,
  BriefNote,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopBriefNotePhrase,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileBriefNotePhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  ugcVideos,
} from './constants';

const FinancialFreedom = () => {
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
        <BannerCtn style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {ugcVideos.map((video, i) => (
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
        </BannerCtn>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <span style={{ fontSize: '2rem' }}>{edge.icon}</span>
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
      <BriefNote>
        {isMobile ? (
          <MaskText phrases={mobileBriefNotePhrase} tag="p" />
        ) : (
          <MaskText phrases={desktopBriefNotePhrase} tag="p" />
        )}
      </BriefNote>
    </Wrapper>
  );
};

export default FinancialFreedom;
