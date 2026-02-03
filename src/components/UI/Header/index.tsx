'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
import raft_logo from '../../../../public/svgs/raft_logo.svg';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image
            src="https://res.cloudinary.com/dxcr9utre/image/upload/v1770147500/Iso_uqpfwv.png"
            alt="Oasis Creativa"
            width={60}
            height={60}
            priority
          />
        </LogoContainer>
      </Inner>
    </Wrapper>
  );
};

export default Header;
