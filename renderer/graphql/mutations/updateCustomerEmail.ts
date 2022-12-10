import { gql, DocumentNode } from '@apollo/client'

export const UPDATE_EMAIL_MUTATION: DocumentNode = gql`
  mutation updateCustomerEmail($email: String!, $password: String!) {
    updateCustomerEmail(email: $email, password: $password) {
      customer {
        email
      }
    }
  }
`
