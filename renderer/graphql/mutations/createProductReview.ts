import { gql, DocumentNode } from '@apollo/client'

export const CREATE_REVIEW_MUTATION: DocumentNode = gql`
  mutation createProductReview(
    $nickname: String!
    $ratings: [ProductReviewRatingInput]!
    $sku: String!
    $summary: String!
    $text: String!
    $imgurl: [String]!
  ) {
    createProductReview(
      input: {
        nickname: $nickname
        ratings: $ratings
        sku: $sku
        summary: $summary
        text: $text
        imgurl: $imgurl
      }
    ) {
      review {
        average_rating
        nickname
        summary
        text
      }
    }
  }
`
