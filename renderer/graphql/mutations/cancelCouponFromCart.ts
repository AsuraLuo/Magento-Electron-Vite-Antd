import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const CANCEL_COUPON_FROM_CART: DocumentNode = gql`
  mutation cancelCouponFromCart($cartId: String!) {
    cancelCoupon: removeCouponFromCart(input: { cart_id: $cartId }) {
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
        applied_coupon {
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
  }
  ${cartItems}
  ${cart_prices}
  ${shippingAddress}
`
