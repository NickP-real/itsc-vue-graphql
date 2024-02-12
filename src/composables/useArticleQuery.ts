import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { type Article } from './type'

type QueryArticle = {
  articles: Article[]
}

export default function () {
  return useQuery<QueryArticle>(
    gql`
      query GetArticles {
        articles(where: { isDeleted: { eq: false } }) {
          articleId
          title
          description
          authorName
          createdDate
          imageUrl
          isDeleted
          comments {
            commentId
            message
            createdDate
          }
        }
      }
    `,
    {},
    { fetchPolicy: 'no-cache' }
  )
}
