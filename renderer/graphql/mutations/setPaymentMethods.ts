import { gql, DocumentNode } from '@apollo/client'

export const SET_PAYMENT_METHODS: DocumentNode = gql`
  mutation setPaymentMethods($cartId: String!, $method: PaymentMethodInput!) {
    paymentMethod: setPaymentMethodOnCart(
      input: { cart_id: $cartId, payment_method: $method }
    ) {
      cart {
        selected_payment_method {
          code
          title
        }
      }
    }
  }
`
