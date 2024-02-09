import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import type { ArticleRequest } from './type'

export default function () {
  return useMutation<{ articleId: string }, ArticleRequest>(gql`
    mutation AddArticle($articleRequest: ArticleRequestInput) {
      addArticle(articleRequest: $articleRequest) {
        articleId
      }
    }
  `)
}
