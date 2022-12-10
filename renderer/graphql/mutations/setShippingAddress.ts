import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const SET_SHIPPING_ADDRESS: DocumentNode = gql`
  mutation setShippingAddress(
    $cartId: String!
    $addresses: [ShippingAddressInput]!
  ) {
    shippingAddress: setShippingAddressesOnCart(
      input: { cart_id: $cartId, shipping_addresses: $addresses }
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
