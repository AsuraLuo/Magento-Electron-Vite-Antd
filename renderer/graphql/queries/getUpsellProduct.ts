import { gql, DocumentNode } from '@apollo/client'

import { price_range } from '../fragment/priceRange'

export const GET_PRODUCT_UPSELL: DocumentNode = gql`
  query getUpsellProduct($filter: ProductAttributeFilterInput) {
    products(filter: $filter) {
      items {
        upsell: upsell_products {
          id
          sku
          name
          url_key
          small_image {
            label
            url(width: 384, height: 512)
          }
          price_range {
            ...price_range
            __typename
          }
          review_count
          rating_summary
          stock_status
          hover_image(width: 384, height: 512)
          __typename
        }
      }
    }
  }
  ${price_range}
`
