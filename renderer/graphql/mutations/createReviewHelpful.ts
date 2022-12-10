import { gql, DocumentNode } from '@apollo/client'

export const CREATE_REVIEW_HELPFUL: DocumentNode = gql`
  mutation createReviewHelpful($input: CreateProductReviewHelpfulInput!) {
    createProductReviewHelpful(input: $input) {
      code
      content
      message
    }
  }
`
