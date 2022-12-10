import { gql, DocumentNode } from '@apollo/client'

export const DELETE_CARD: DocumentNode = gql`
  mutation deleteCard($input: saveCardInput!) {
    deleteCard(input: $input) {
      code
      content
      message
    }
  }
`
