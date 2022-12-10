import { gql, DocumentNode } from '@apollo/client'

import { price_range } from '../fragment/priceRange'
import { categoryProduct } from '../fragment/categoryProduct'

export const GET_PRODUCT_LIST: DocumentNode = gql`
  query getProductList(
    $search: String
    $filters: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
  ) {
    products(
      search: $search
      pageSize: $pageSize
      currentPage: $currentPage
      filter: $filters
      sort: $sort
    ) {
      items {
        id
        name
        sku
        url_key
        small_image {
          label
          url(width: 384, height: 512)
        }
        price_range {
          ...price_range
          __typename
        }
        hover_image(width: 384, height: 512)
        stock_status
        review_count
        rating_summary
        ...categoryProduct
        __typename
      }
      total_count
    }
  }
  ${price_range}
  ${categoryProduct}
`
