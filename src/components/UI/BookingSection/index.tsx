'use client';
import React, { useState } from 'react';
import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  Field,
  Label,
  Input,
  Select,
  Textarea,
  SubmitButton,
  StatusMessage,
  SuccessBox,
  Honeypot,
} from './styles';
import { useLanguage } from '@/i18n';

// ─────────────────────────────────────────────────────────────
// Web3Forms: obtén tu access key GRATIS en https://web3forms.com
// (te la envían a tu correo). Pégala aquí abajo o define la
// variable de entorno NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
// ─────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? 'PEGA-AQUI-TU-ACCESS-KEY';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const BookingSection = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'Nueva solicitud de fecha — Cotización Boda');
    formData.append('from_name', 'Cotización Boda');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
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
          <Form onSubmit={handleSubmit}>
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
              <Label htmlFor="location">{t.booking.fields.location}</Label>
              <Input id="location" name="location" type="text" />
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
          </Form>
        )}
      </Container>
    </Wrapper>
  );
};

export default BookingSection;
