import { gql, DocumentNode } from '@apollo/client'

export const GET_CUSTOMER_REVIEW: DocumentNode = gql`
  query getCustomerReview($currentPage: Int, $pageSize: Int) {
    customer {
      reviews(currentPage: $currentPage, pageSize: $pageSize) {
        items {
          id
          average_rating
          created_at
          product {
            id
            name
            image {
              label
              url
            }
            rating_summary
            review_count
            url_key
            __typename
          }
          ratings_breakdown {
            name
            value
          }
          summary
          text
        }
        page_info {
          current_page
          page_size
          total_pages
        }
      }
    }
  }
`
