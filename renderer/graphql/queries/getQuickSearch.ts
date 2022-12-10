import { gql, DocumentNode } from '@apollo/client'

import { price_range } from '../fragment/priceRange'

export const GET_QUICK_SEARCH: DocumentNode = gql`
  query getQuickSearch(
    $search: String
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
  ) {
    products(
      search: $search
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
    ) {
      items {
        id
        name
        sku
        url_key
        small_image {
          label
          url
        }
        price_range {
          ...price_range
          __typename
        }
        stock_status
      }
      total_count
    }
  }
  ${price_range}
`
