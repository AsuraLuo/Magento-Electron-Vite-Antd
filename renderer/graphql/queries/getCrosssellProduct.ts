import { gql, DocumentNode } from '@apollo/client'

import { price_range } from '../fragment/priceRange'

export const GET_PRODUCT_CROSSSELL: DocumentNode = gql`
  query getCrosssellProduct($filters: ProductAttributeFilterInput) {
    products(filter: $filters) {
      items {
        crosssell: crosssell_products {
          id
          sku
          name
          url_key
          small_image {
            label
            url
          }
          price_range {
            ...price_range
            __typename
          }
          review_count
          rating_summary
          stock_status
          __typename
        }
      }
    }
  }
  ${price_range}
`
