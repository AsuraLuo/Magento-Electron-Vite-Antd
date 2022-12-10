import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const APPLY_COUPON_TO_CART: DocumentNode = gql`
  mutation applyCouponToCart($cartId: String!, $promo: String!) {
    applyCoupon: applyCouponToCart(
      input: { cart_id: $cartId, coupon_code: $promo }
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
