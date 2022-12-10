import { gql, DocumentNode } from '@apollo/client'

export const NEWSLETTER_MUTATION: DocumentNode = gql`
  mutation subscribeNewsletter($email: String!) {
    subscribe: subscribeEmailToNewsletter(email: $email) {
      status
    }
  }
`
