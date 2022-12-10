import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const ADD_PRODUCTS_MUTATION: DocumentNode = gql`
  mutation addProductsToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
    addToCart: addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
      cart {
        id
        email
        is_virtual
        ...cartItems
        prices {
          ...cart_prices
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
      }
    }
  }
  ${cartItems}
  ${cart_prices}
  ${shippingAddress}
`
