import Image from 'next/image'
import React from 'react'
import { colors } from '../../design/constants'

export function SalesCard() {
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 8,
        display: 'grid',
        gridTemplateRows: '3fr 1fr',
        padding: 8,
        rowGap: 4,
      }}
    >
      <div css={{ padding: '0px 24px' }}>
        <Image
          alt="Sale Thumbnail"
          height={50}
          src="/bayc-logo.png"
          width={50}
        />
      </div>

      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <span
          css={{
            color: colors.darkGrey,
            fontSize: 10,
            fontWeight: 'bold',
          }}
        >
          Collection
        </span>

        <span css={{ fontWeight: 'bolder', marginBottom: 4 }}>
          Item
        </span>

        <div
          css={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span css={{ fontSize: 12 }}>Price</span>

          <span css={{ color: colors.darkGrey, fontSize: 10 }}>
            Time ago
          </span>
        </div>
      </div>
    </div>
  )
}
