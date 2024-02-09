import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default function () {
  return useMutation<{ deleteArticleId: boolean }, { deleteArticleId: number }>(gql`
    mutation DeleteArticle($deleteArticleId: Int!) {
      deleteArticleById(articleId: $deleteArticleId)
    }
  `)
}
