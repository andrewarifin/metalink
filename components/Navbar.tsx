import React from 'react'
import { Button, ButtonType, RoundButton } from './design/Button'
import Image from 'next/image'

import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi'
import { colors } from './design/constants'
import { Input } from './design/Input'
import { RoundedIcon } from './design/Icon'

export function Navbar() {
  return (
    <div
      css={{
        borderBottom: `1px solid ${colors.lightGrey}`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        padding: '12px',
      }}
    >
      <a
        css={{
          alignItems: 'center',
          display: 'flex',
          width: 'fit-content',
        }}
        href="https://metalink.com"
      >
        <Image
          alt="Metalink Logo"
          height={30}
          src="/metalink-logo.svg"
          width={30}
        />

        <span
          css={{
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          Metalink
        </span>
      </a>

      <div
        css={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <RoundButton>
          <FiChevronLeft css={{ color: 'black' }} />
        </RoundButton>

        <RoundButton>
          <FiChevronRight css={{ color: 'black' }} />
        </RoundButton>

        <Input placeholder="NFTs, channels, and users..." />
      </div>

      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <RoundedIcon src="./avatar.png" />

        <RoundButton>
          <FiChevronDown css={{ color: 'black' }} />
        </RoundButton>
      </div>
    </div>
  )
}
