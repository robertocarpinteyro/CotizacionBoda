'use client';
import styled from 'styled-components';

export const FormGrid = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(201, 169, 110, 0.2);
  background: linear-gradient(135deg, #141414 0%, #0c0c0c 100%);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1.25rem;
  }
`;

export const Field = styled.div<{ $full?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  grid-column: ${({ $full }) => ($full ? '1 / -1' : 'auto')};
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--light-gold);
  letter-spacing: 0.02em;
`;

const fieldStyles = `
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  color: var(--white);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:focus {
    outline: none;
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(201, 169, 110, 0.15);
  }
`;

export const Input = styled.input`
  ${fieldStyles}

  &[type='date'] {
    color-scheme: dark;
  }
`;

export const Select = styled.select`
  ${fieldStyles}
  cursor: pointer;

  option {
    background: #141414;
    color: var(--white);
  }
`;

export const Textarea = styled.textarea`
  ${fieldStyles}
  min-height: 110px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  grid-column: 1 / -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border: none;
  border-radius: 6.25rem;
  background: var(--gold);
  color: var(--black);
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(201, 169, 110, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StatusMessage = styled.p<{ $error?: boolean }>`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 0.95rem;
  color: ${({ $error }) => ($error ? '#e08a8a' : 'var(--light-gold)')};
`;

export const SuccessBox = styled.div`
  text-align: center;
  padding: 3rem 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(201, 169, 110, 0.3);
  background: linear-gradient(135deg, rgba(201, 169, 110, 0.08) 0%, #0c0c0c 100%);

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--gold);
    margin-bottom: 0.75rem;
    text-shadow: 0 0 24px rgba(201, 169, 110, 0.35);
  }

  p {
    font-size: 1.1rem;
    color: var(--light-gray);
  }
`;

export const Honeypot = styled.input`
  display: none;
`;
