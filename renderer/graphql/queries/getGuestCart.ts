import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const GET_GUEST_CART: DocumentNode = gql`
  query getGuestCart($cartId: String!) {
    cart(cart_id: $cartId) {
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
