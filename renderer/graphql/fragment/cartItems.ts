import { gql } from '@apollo/client'

import { price_range } from './priceRange'
import { configurableCart } from './configurableCart'

export const cartItems = gql`
  fragment cartItems on Cart {
    items {
      id
      product {
        id
        name
        sku
        type_id
        url_key
        thumbnail {
          label
          url
        }
        price_range {
          ...price_range
          __typename
        }
        ... on ConfigurableProduct {
          variants {
            ... on ConfigurableVariant {
              attributes {
                code
                uid
              }
              product {
                thumbnail {
                  label
                  url
                }
              }
            }
            __typename
          }
        }
        __typename
      }
      quantity
      prices {
        discounts {
          amount {
            value
          }
        }
        row_total {
          value
        }
        price {
          value
        }
      }
      ...configurableCart
      __typename
    }
  }
  ${price_range}
  ${configurableCart}
`
