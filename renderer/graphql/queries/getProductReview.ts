import { gql, DocumentNode } from '@apollo/client'

export const GET_PRODUCT_REVIEW: DocumentNode = gql`
  query getProductReview(
    $filter: ProductAttributeFilterInput
    $pageSize: Int = 10
    $currentPage: Int = 1
    $sort: ReviewsSortInput
  ) {
    products(filter: $filter) {
      items {
        reviews(pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
          items {
            id
            average_rating
            created_at
            nickname
            summary
            text
            review_image {
              id
              url
            }
            review_helpful {
              is_help_count
              is_not_help_count
              items {
                id
                is_help
                is_not_help
                is_owner
              }
            }
          }
          page_info {
            current_page
            page_size
            total_pages
          }
        }
      }
    }
    reviewMeta: productReviewRatingsMetadata {
      items {
        id
        name
        values {
          value
          value_id
        }
      }
    }
  }
`
