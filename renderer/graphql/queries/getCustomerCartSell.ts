import { gql, DocumentNode } from '@apollo/client'

import { price_range } from '../fragment/priceRange'

export const GET_CUSTOMER_CART_SELL: DocumentNode = gql`
  query getCustomerCartSell {
    cart: customerCart {
      cross_sells_products {
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
  ${price_range}
`
