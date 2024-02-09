import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default function () {
  return useMutation(gql`
    mutation AddComment($commentRequest: CommentRequestInput) {
      addComment(commentRequest: $commentRequest) {
        commentId
        message
        ipAddress
        articleId
      }
    }
  `)
}
