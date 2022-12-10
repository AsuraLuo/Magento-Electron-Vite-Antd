import { gql, DocumentNode } from '@apollo/client'

export const GET_GUEST_EMAIL: DocumentNode = gql`
  query getGuestEmail($email: String!) {
    isEmailAvailable(email: $email) {
      available: is_email_available
    }
  }
`
