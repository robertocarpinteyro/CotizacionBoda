'use client';
import React, { useState } from 'react';
import { Wrapper, Container, Header, Title, Subtitle } from './styles';
import {
  FormGrid,
  Field,
  Label,
  Input,
  Select,
  Textarea,
  SubmitButton,
  StatusMessage,
  SuccessBox,
  Honeypot,
} from '@/components/Common/Form/styles';
import { submitToWeb3Forms } from '@/components/Common/Form/web3forms';
import { useLanguage } from '@/i18n';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const BookingSection = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const ok = await submitToWeb3Forms(form, {
      subject: 'Nueva solicitud de fecha — Cotización Boda',
    });
    if (ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <Wrapper id="agendar">
      <Container>
        <Header>
          <Title>{t.booking.title}</Title>
          <Subtitle>{t.booking.subtitle}</Subtitle>
        </Header>

        {status === 'success' ? (
          <SuccessBox>
            <h3>{t.booking.successTitle}</h3>
            <p>{t.booking.successMessage}</p>
          </SuccessBox>
        ) : (
          <FormGrid onSubmit={handleSubmit}>
            {/* Honeypot anti-spam */}
            <Honeypot type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />

            <Field>
              <Label htmlFor="name">{t.booking.fields.name}</Label>
              <Input id="name" name="name" type="text" required />
            </Field>

            <Field>
              <Label htmlFor="weddingDate">{t.booking.fields.weddingDate}</Label>
              <Input id="weddingDate" name="wedding_date" type="date" required />
            </Field>

            <Field>
              <Label htmlFor="meetingDate">{t.booking.fields.meetingDate}</Label>
              <Input id="meetingDate" name="meeting_date" type="date" required />
            </Field>

            <Field>
              <Label htmlFor="meetingTime">{t.booking.fields.meetingTime}</Label>
              <Select id="meetingTime" name="meeting_time" defaultValue="">
                <option value="" disabled>
                  {t.booking.timePlaceholder}
                </option>
                {t.booking.timeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </Select>
            </Field>

            <Field>
              <Label htmlFor="package">{t.booking.fields.package}</Label>
              <Select id="package" name="package" defaultValue="">
                <option value="" disabled>
                  {t.booking.packagePlaceholder}
                </option>
                {t.booking.packageOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </Select>
            </Field>

            <Field>
              <Label htmlFor="phone">{t.booking.fields.phone}</Label>
              <Input id="phone" name="phone" type="tel" required />
            </Field>

            <Field>
              <Label htmlFor="email">{t.booking.fields.email}</Label>
              <Input id="email" name="email" type="email" required />
            </Field>

            <Field $full>
              <Label htmlFor="message">{t.booking.fields.message}</Label>
              <Textarea id="message" name="message" />
            </Field>

            <SubmitButton type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? t.booking.submitting : t.booking.submit}
            </SubmitButton>

            {status === 'error' && (
              <StatusMessage $error>{t.booking.errorMessage}</StatusMessage>
            )}
          </FormGrid>
        )}
      </Container>
    </Wrapper>
  );
};

export default BookingSection;
