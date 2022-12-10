import { gql, DocumentNode } from '@apollo/client'

export const CREAT_PAYMENT_INTENT: DocumentNode = gql`
  mutation createPaymentIntent($cartId: String) {
    paymentIntent: createPaymentIntent(input: { cart_id: $cartId }) {
      secret: intent_client_secret
    }
  }
`
