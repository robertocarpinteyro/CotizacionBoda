'use client';
import React from 'react';
import Image from 'next/image';
import { Container, ImageWrapper, Placeholder } from './styles';

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
  return (
    <Container $aspectRatio={aspectRatio}>
      {src ? (
        <ImageWrapper>
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
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
