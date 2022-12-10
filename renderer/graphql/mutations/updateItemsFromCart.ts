import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const UPDATE_CART_MUTATION: DocumentNode = gql`
  mutation updateItemsFromCart(
    $cartId: String!
    $cartItems: [CartItemUpdateInput]!
  ) {
    updateCart: updateCartItems(
      input: { cart_id: $cartId, cart_items: $cartItems }
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
