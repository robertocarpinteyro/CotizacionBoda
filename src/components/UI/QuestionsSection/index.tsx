'use client';
import React, { useState } from 'react';
import { Wrapper, Container, Header, Title, Subtitle } from './styles';
import {
  FormGrid,
  Field,
  Label,
  Input,
  Textarea,
  SubmitButton,
  StatusMessage,
  SuccessBox,
  Honeypot,
} from '@/components/Common/Form/styles';
import { submitToWeb3Forms } from '@/components/Common/Form/web3forms';
import { useLanguage } from '@/i18n';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const QuestionsSection = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const ok = await submitToWeb3Forms(form, {
      subject: 'Nueva pregunta — Cotización Boda',
    });
    if (ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <Wrapper id="preguntas">
      <Container>
        <Header>
          <Title>{t.questions.title}</Title>
          <Subtitle>{t.questions.subtitle}</Subtitle>
        </Header>

        {status === 'success' ? (
          <SuccessBox>
            <h3>{t.questions.successTitle}</h3>
            <p>{t.questions.successMessage}</p>
          </SuccessBox>
        ) : (
          <FormGrid onSubmit={handleSubmit}>
            {/* Honeypot anti-spam */}
            <Honeypot type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />

            <Field>
              <Label htmlFor="q_name">{t.questions.fields.name}</Label>
              <Input id="q_name" name="name" type="text" required />
            </Field>

            <Field>
              <Label htmlFor="q_email">{t.questions.fields.email}</Label>
              <Input id="q_email" name="email" type="email" required />
            </Field>

            <Field $full>
              <Label htmlFor="q_phone">{t.questions.fields.phone}</Label>
              <Input id="q_phone" name="phone" type="tel" />
            </Field>

            <Field $full>
              <Label htmlFor="q_question">{t.questions.fields.question}</Label>
              <Textarea id="q_question" name="question" required />
            </Field>

            <SubmitButton type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? t.questions.submitting : t.questions.submit}
            </SubmitButton>

            {status === 'error' && (
              <StatusMessage $error>{t.questions.errorMessage}</StatusMessage>
            )}
          </FormGrid>
        )}
      </Container>
    </Wrapper>
  );
};

export default QuestionsSection;
