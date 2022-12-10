import { gql, DocumentNode } from '@apollo/client'

export const UPDATE_PASSWORD_MUTATION: DocumentNode = gql`
  mutation updateCustomerPassword(
    $currentPassword: String!
    $newPassword: String!
  ) {
    changeCustomerPassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      email
      firstname
      lastname
    }
  }
`
