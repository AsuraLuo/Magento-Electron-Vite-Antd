import { gql, DocumentNode } from '@apollo/client'

export const REVOKE_TOKEN_MUTATION: DocumentNode = gql`
  mutation revokeCustomerToken {
    revoke: revokeCustomerToken {
      result
    }
  }
`
