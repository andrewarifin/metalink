import React from 'react'
import { Button, RoundButton } from './design/Button'
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
        backgroundColor: 'white',
        borderBottom: `1px solid ${colors.lightGrey}`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        padding: '12px',
        position: 'sticky',
        top: 0,
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

        <div css={{ margin: '0px 12px' }}>
          <RoundButton>
            <FiChevronRight css={{ color: 'black' }} />
          </RoundButton>
        </div>

        <Input placeholder="NFTs, channels, and users..." />
      </div>

      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div css={{ marginRight: 12 }}>
          <RoundedIcon src="./avatar.png" />
        </div>

        <RoundButton>
          <FiChevronDown css={{ color: 'black' }} />
        </RoundButton>
      </div>
    </div>
  )
}
