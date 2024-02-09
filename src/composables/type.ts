export type Comment = {
  commentId: number
  message: string
  createdDate: string
}

export type Article = {
  __typename: string
  articleId: number
  title: string
  description: string
  authorName: string
  createdDate: string
  imageUrl: string
  isDeleted: boolean
  comments: Comment[]
}

type IpAddress = string

export type ArticleRequest = Pick<Article, 'title' | 'authorName' | 'description' | 'imageUrl'> & {
  createdDate: string | null
  ipAddress: IpAddress
}

export type CommentRequest = Pick<Article, 'articleId'> &
  Pick<Comment, 'message'> & { ipAddress: IpAddress }
