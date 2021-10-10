import React from 'react'
import { Button } from '../../design/Button'
import { colors, newsLogoMap } from '../../design/constants'
import { RoundedIcon } from '../../design/Icon'
import { Pill } from '../../design/Pill'
import Link from 'next/link'
import { Article } from './NewsCards'
import { FiGlobe } from 'react-icons/fi'
import { Line } from '../../design/Line'

type Props = {
  article: Article
  index: number
}
export function NewsCard({ index, article }: Props) {
  const { title, source, date, url, description } = article
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gridColumn: index % 2 === 0 ? '1/ 2' : '2 /3',
        gridRow: index === 1 ? '2 / span 6' : 'span 6',
        padding: '12px 0px',
      }}
      key={title}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 16px',
        }}
      >
        <div
          css={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          {newsLogoMap[source] ? (
            <RoundedIcon src={newsLogoMap[source]} />
          ) : (
            <FiGlobe css={{ height: 30, widht: 30 }} />
          )}

          <span
            css={{
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 4,
            }}
          >
            {source}
          </span>
        </div>

        <Pill content={date} />
      </div>

      <Line />

      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 14,
          height: '100%',
          justifyContent: 'space-between',
          padding: '0px 16px',
        }}
      >
        <span
          css={{
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
            color: colors.darkGrey,
            display: '-webkit-box',
            marginBottom: 16,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <span css={{ color: 'black', fontWeight: 'bold' }}>
            {title}
          </span>

          <span css={{ color: 'black' }}>{` \u2022 `}</span>

          <span>{description}</span>
        </span>

        <Link href={url} passHref>
          <Button>
            <span
              css={{
                color: colors.darkPurple,
                fontSize: 12,
                fontWeight: 'bold',
              }}
            >
              Read
            </span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
