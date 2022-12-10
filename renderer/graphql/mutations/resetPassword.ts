import { gql, DocumentNode } from '@apollo/client'

export const RESET_PASSWORD: DocumentNode = gql`
  mutation resetPassword(
    $email: String!
    $token: String!
    $newPassword: String!
  ) {
    resetPassword(
      email: $email
      resetPasswordToken: $token
      newPassword: $newPassword
    )
  }
`
