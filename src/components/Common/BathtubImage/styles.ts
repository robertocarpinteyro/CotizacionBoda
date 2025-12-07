import styled from 'styled-components';

export const Container = styled.div<{ $aspectRatio: string }>`
  width: 100%;
  aspect-ratio: ${props => props.$aspectRatio};
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  text-align: center;

  span {
    color: rgba(255, 255, 255, 0.4);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &::before {
    content: '📷';
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    span {
      font-size: 0.875rem;
    }

    &::before {
      font-size: 2rem;
    }
  }
`;
