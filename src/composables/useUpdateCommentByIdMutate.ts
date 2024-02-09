import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import type { CommentRequest } from './type'

export default function () {
  return useMutation<
    { updateCommentById: boolean },
    { commentId: number; commentRequest: Partial<CommentRequest> }
  >(gql`
    mutation UpdateComment($commentId: Int!, $commentUpdateRequest: CommentRequestInput) {
      updateCommentById(commentId: $commentId, commentRequest: $commentUpdateRequest)
    }
  `)
}
