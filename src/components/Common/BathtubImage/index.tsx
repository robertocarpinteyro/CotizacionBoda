'use client';
import React from 'react';
import Image from 'next/image';
import { Container, ImageWrapper, Placeholder, VideoElement } from './styles';

interface BathtubImageProps {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  placeholder?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
}

const BathtubImage: React.FC<BathtubImageProps> = ({
  src,
  alt = 'Image',
  aspectRatio = '16/9',
  placeholder = 'Image placeholder - URL pending',
  objectFit = 'cover'
}) => {
  // Detectar si es un video
  const isVideo = src && (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov') || src.includes('/video/'));

  return (
    <Container $aspectRatio={aspectRatio}>
      {src ? (
        <ImageWrapper>
          {isVideo ? (
            <VideoElement
              autoPlay
              loop
              muted
              playsInline
              style={{ objectFit }}
            >
              <source src={src} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </VideoElement>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </ImageWrapper>
      ) : (
        <Placeholder>
          <span>{placeholder}</span>
        </Placeholder>
      )}
    </Container>
  );
};

export default BathtubImage;
