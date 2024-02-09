import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import type { ArticleRequest } from './type'

export default function () {
  return useMutation<
    { updateArticleById: boolean },
    { articleId: number; articleUpdateRequest: Partial<ArticleRequest> }
  >(gql`
    mutation UpdateArticle($articleId: Int!, $articleUpdateRequest: ArticleRequestInput) {
      updateArticleById(articleId: $articleId, articleRequest: $articleUpdateRequest)
    }
  `)
}
