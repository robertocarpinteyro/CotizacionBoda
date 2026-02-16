'use client';
import React, { useRef, useState } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  Answer,
  Inner,
  Question,
  Wrapper,
} from './styles';
import Image from 'next/image';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { animate } from './constants';
import { useLanguage } from '@/i18n';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const { t } = useLanguage();

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, {
    once: true,
    margin: '-10%',
    amount: 0.4,
  });

  const isMobile = useIsMobile();

  return (
    <Wrapper id="faq">
      <Inner>
        {isMobile ? (
          <MaskText phrases={[...t.faq.headerMobile]} tag="h1" />
        ) : (
          <MaskText phrases={[...t.faq.headerDesktop]} tag="h1" />
        )}
        <Accordion ref={accordionRef}>
          {t.faq.items.map((item, index) => (
            <AccordionItem
              variants={animate}
              initial="initial"
              animate={isInView ? 'open' : ''}
              custom={index}
              key={index}
            >
              <Question onClick={() => toggleItem(index)}>
                {item.question}
                <Image src={ic_chevron_down} alt="chevron down" />
              </Question>
              <AnimatePresence>
                {openItem === index && (
                  <Answer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </Inner>
    </Wrapper>
  );
};

export default FAQ;
