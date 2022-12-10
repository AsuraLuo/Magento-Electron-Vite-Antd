import { gql, DocumentNode } from '@apollo/client'

export const SET_GUEST_EMAIL: DocumentNode = gql`
  mutation setGuestEmail($cartId: String!, $email: String!) {
    guestEmail: setGuestEmailOnCart(
      input: { cart_id: $cartId, email: $email }
    ) {
      cart {
        email
      }
    }
  }
`
