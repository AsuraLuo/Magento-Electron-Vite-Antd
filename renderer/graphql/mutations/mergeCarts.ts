import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const MERGE_CARTS: DocumentNode = gql`
  mutation mergeCarts($source_cart_id: String!, $destination_cart_id: String!) {
    mergeCarts(
      source_cart_id: $source_cart_id
      destination_cart_id: $destination_cart_id
    ) {
      id
      email
      is_virtual
      ...cartItems
      prices {
        ...cart_prices
        __typename
      }
      total_quantity
      applied_coupons {
        code
      }
      shipping_addresses {
        ...shippingAddress
        __typename
      }
      available_payment_methods {
        code
        title
      }
      __typename
    }
  }
  ${cartItems}
  ${cart_prices}
  ${shippingAddress}
`
