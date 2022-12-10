import { gql, DocumentNode } from '@apollo/client'

export const UPDATE_SUBSCRIBE_NEWSLETTER: DocumentNode = gql`
  mutation updateSubscribeNewsletter($newsletter: Boolean) {
    updateCustomer(input: { is_subscribed: $newsletter }) {
      customer {
        is_subscribed
      }
    }
  }
`
