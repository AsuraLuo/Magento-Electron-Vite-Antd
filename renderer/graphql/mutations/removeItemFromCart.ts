import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const REMOVE_CART_MUTATION: DocumentNode = gql`
  mutation removeItemFromCart($cart_id: String!, $cart_item_id: Int!) {
    removeCart: removeItemFromCart(
      input: { cart_id: $cart_id, cart_item_id: $cart_item_id }
    ) {
      cart {
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
        }
        available_payment_methods {
          code
          title
        }
        __typename
      }
    }
  }
  ${cartItems}
  ${cart_prices}
  ${shippingAddress}
`
