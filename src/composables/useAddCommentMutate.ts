import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import type { CommentRequest } from './type'

export default function () {
  return useMutation<{ commentId: string }, { commentRequest: CommentRequest }>(gql`
    mutation AddComment($commentRequest: CommentRequestInput) {
      addComment(commentRequest: $commentRequest) {
        commentId
      }
    }
  `)
}
