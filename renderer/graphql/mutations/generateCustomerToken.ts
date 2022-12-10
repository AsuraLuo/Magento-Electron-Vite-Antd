import { gql, DocumentNode } from '@apollo/client'

export const GENERATE_TOKEN_MUTATION: DocumentNode = gql`
  mutation generateCustomerToken($email: String!, $password: String!) {
    customerToken: generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`
