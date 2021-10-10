import moment from 'moment'
import { useEffect } from 'react'
import { Article } from '../NewsCards'

export function useFetchInitialArticles({
  setIsFetching,
  setNewsArticles,
}: {
  setIsFetching: (isFetching: boolean) => void
  setNewsArticles: (articles: Article[]) => void
}) {
  useEffect(() => {
    async function fetchNewsArticles() {
      setIsFetching(true)
      const results = await fetch(
        `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}&qInTitle=nft&page=1&pageSize=4`,
      )
      const resultsJson = await results.json()

      const parsedResults = resultsJson.articles.map(
        (article: any) => ({
          date: moment(article.publishedAt).format('MMM DD, YYYY'),
          description: article.description,
          source: article.source.name,
          title: article.title,
          url: article.url,
        }),
      )

      setIsFetching(false)
      setNewsArticles([...parsedResults])
    }

    fetchNewsArticles()
  }, [setIsFetching, setNewsArticles])
}
