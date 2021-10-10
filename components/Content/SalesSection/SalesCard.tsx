import Image from 'next/image'
import React from 'react'
import { colors } from '../../design/constants'

export type Sale = {
  collection: string
  item: string
  thumbnail: string
  time: string
  price: string
}

export function SalesCard({ sale }: { sale: Sale }) {
  const { collection, item, thumbnail, time, price } = sale
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 8,
        display: 'grid',
        gridTemplateRows: '3fr 1fr',
        maxWidth: '1fr',
        padding: 8,
        rowGap: 4,
      }}
    >
      <div
        css={{
          alignItems: 'center',
          display: 'flex',
          padding: '0px 24px',
        }}
      >
        <Image
          alt="Sale Thumbnail"
          height={300}
          src={thumbnail}
          width={300}
        />
      </div>

      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 0,
        }}
      >
        <span
          css={{
            color: colors.darkGrey,
            fontSize: 10,
            fontWeight: 'bold',
          }}
        >
          {collection}
        </span>

        <span
          css={{
            display: 'inline-block',
            fontWeight: 'bolder',
            marginBottom: 4,
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {item}
        </span>

        <div
          css={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span css={{ fontSize: 12 }}>{price}</span>

          <span css={{ color: colors.darkGrey, fontSize: 10 }}>
            {time}
          </span>
        </div>
      </div>
    </div>
  )
}
