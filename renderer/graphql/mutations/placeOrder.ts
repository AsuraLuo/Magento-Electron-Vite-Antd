import { gql, DocumentNode } from '@apollo/client'

export const PLACE_ORDER: DocumentNode = gql`
  mutation placeOrder($cartId: String!, $comment: String) {
    placeOrder(input: { cart_id: $cartId, comment: $comment }) {
      order {
        order_id
      }
    }
  }
`
