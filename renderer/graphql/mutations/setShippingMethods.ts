import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const SET_SHIPPING_METHODS: DocumentNode = gql`
  mutation setShippingMethods(
    $cartId: String!
    $method: [ShippingMethodInput]!
  ) {
    shippingMethods: setShippingMethodsOnCart(
      input: { cart_id: $cartId, shipping_methods: $method }
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
        available_payment_methods {
          code
          title
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
