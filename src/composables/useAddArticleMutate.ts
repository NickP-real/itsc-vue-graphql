import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import type { ArticleRequest } from './type'

export default function () {
  return useMutation<{ addArticle: { articleId: string } }, { articleRequest: ArticleRequest }>(gql`
    mutation AddArticle($articleRequest: ArticleRequestInput) {
      addArticle(articleRequest: $articleRequest) {
        articleId
      }
    }
  `)
}
