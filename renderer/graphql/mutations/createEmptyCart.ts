import { gql, DocumentNode } from '@apollo/client'

export const CREATE_CART_MUTATION: DocumentNode = gql`
  mutation createEmptyCart($cart_id: String) {
    createEmptyCart(input: { cart_id: $cart_id })
  }
`
