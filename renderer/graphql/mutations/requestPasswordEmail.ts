import { gql, DocumentNode } from '@apollo/client'

export const REQUEST_PASSWORD_EMAIL: DocumentNode = gql`
  mutation requestPasswordEmail($email: String!) {
    requestPasswordResetEmail(email: $email)
  }
`
