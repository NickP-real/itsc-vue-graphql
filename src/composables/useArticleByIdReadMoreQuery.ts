import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import type { Article } from './type'

type QueryArticleById = {
  articles: Pick<
    Article,
    'title' | 'imageUrl' | 'description' | 'createdDate' | 'authorName' | 'comments'
  >[]
}

export default function (articleId: number) {
  return useQuery<QueryArticleById>(
    gql`
      query GetArticleById($articleId: Int!) {
        articles(where: { articleId: { eq: $articleId }, and: { isDeleted: { eq: false } } }) {
          title
          imageUrl
          description
          createdDate
          authorName
          comments {
            message
          }
        }
      }
    `,
    { articleId }
  )
}
