import { gql, DocumentNode } from '@apollo/client'

export const CREATE_CUSTOMER: DocumentNode = gql`
  mutation createCustomer(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $is_subscribed: Boolean
  ) {
    createCustomer(
      input: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
        is_subscribed: $is_subscribed
      }
    ) {
      customer {
        firstname
        lastname
        email
      }
    }
  }
`
