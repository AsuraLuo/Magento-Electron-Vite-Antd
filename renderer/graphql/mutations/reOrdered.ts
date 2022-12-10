import { gql, DocumentNode } from '@apollo/client'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'

export const RE_RDERED: DocumentNode = gql`
  mutation reOrdered($number: String!) {
    reorderItems(orderNumber: $number) {
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
        __typename
      }
    }
  }
  ${cartItems}
  ${cart_prices}
`
