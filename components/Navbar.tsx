import React from 'react';
import { Button, ButtonType, RoundButton } from './design/Button';
import Image from 'next/image';

import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { colors } from './design/constants';
import { Input } from './design/Input';
import { RoundedIcon } from './design/Icon';

export function Navbar() {
  return (
    <div css={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      padding: '12px',
    }}>
      <a href="https://metalink.com" css={{
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Image src="/metalink-logo.svg" alt="Metalink Logo" width={30} height={30} />
        <span css={{
          fontWeight: 'bold',
          fontSize: '24px'
        }}>Metalink</span>
      </a>
      <div css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <RoundButton><FiChevronLeft css={{ color: 'black' }} /></RoundButton>
        <RoundButton><FiChevronRight css={{ color: 'black' }} /></RoundButton>
        <Input placeholder="NFTs, channels, and users..." />
      </div>
      <div css={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <RoundedIcon src="./avatar.png" />
        <RoundButton><FiChevronDown css={{ color: 'black' }} /></RoundButton>
      </div>
    </div>
  )
}