import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const ADD_CONFIGURABLE_MUTATION: DocumentNode = gql`
  mutation addConfigurableToCart(
    $cartId: String!
    $cartItems: [ConfigurableProductCartItemInput]!
  ) {
    addToCart: addConfigurableProductsToCart(
      input: { cart_id: $cartId, cart_items: $cartItems }
    ) {
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
