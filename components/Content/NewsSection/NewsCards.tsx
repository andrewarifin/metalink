import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button } from '../../design/Button'
import { colors } from '../../design/constants'
import { RoundedIcon } from '../../design/Icon'
import { Pill } from '../../design/Pill'
import { useFetchInitialArticles } from './hooks/useFetchInitialArticles'
import { fetchNewPageOfArticles } from './helpers/fetchNewPageofArticles'
import { NewsCard } from './NewsCard'

export type Article = {
  date: string
  description: string
  source: string
  title: string
  url: string
}
export function NewsCards() {
  const [newsArticles, setNewsArticles] = useState<Article[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useFetchInitialArticles({ setIsFetching, setNewsArticles })

  return (
    <div
      css={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          columnGap: 12,
          display: 'grid',
          gridAutoRows: 25,
          gridTemplateColumns: '1fr 1fr',
          rowGap: 12,
        }}
      >
        {newsArticles.map((article, index) => (
          <NewsCard
            article={article}
            index={index}
            key={article.title}
          />
        ))}
      </div>

      <div css={{ marginTop: 24 }}>
        <Button
          onClick={async () => {
            await fetchNewPageOfArticles({
              currentPage,
              newsArticles,
              setCurrentPage,
              setIsFetching,
              setNewsArticles,
            })
            window.scrollTo({
              behavior: 'smooth',
              top: document.body.scrollHeight,
            })
          }}
        >
          <span
            css={{
              color: colors.darkPurple,
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            Show More
          </span>
        </Button>
      </div>
    </div>
  )
}
