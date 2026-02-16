'use client';
import React from 'react';
import {
  Wrapper,
  Container,
  Grid,
  Card,
  Icon,
  Title,
  Description,
} from './styles';
import { useLanguage } from '@/i18n';

const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <Wrapper>
      <Container>
        <Grid>
          {t.benefits.map((benefit, index) => (
            <Card key={index}>
              <Icon>{benefit.icon}</Icon>
              <Title>{benefit.title}</Title>
              <Description>{benefit.description}</Description>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default BenefitsSection;
