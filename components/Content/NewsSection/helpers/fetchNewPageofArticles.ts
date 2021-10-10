import moment from 'moment'
import { Article } from '../NewsCards'

export async function fetchNewPageOfArticles({
  currentPage,
  setCurrentPage,
  newsArticles,
  setNewsArticles,
  setIsFetching,
}: {
  currentPage: number
  setCurrentPage: (newPage: number) => void
  newsArticles: Article[]
  setNewsArticles: (articles: Article[]) => void
  setIsFetching: (isFetching: boolean) => void
}) {
  setIsFetching(true)
  const newPage = currentPage + 1
  const results = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}&qInTitle=nft&page=${newPage}&pageSize=4`,
  )
  const resultsJson = await results.json()

  const parsedResults = resultsJson.articles.map((article: any) => ({
    date: moment(article.publishedAt).format('MMM DD, YYYY'),
    description: article.description,
    source: article.source.name,
    title: article.title,
    url: article.url,
  }))

  setIsFetching(false)
  setCurrentPage(newPage)
  setNewsArticles([...newsArticles, ...parsedResults])
}
