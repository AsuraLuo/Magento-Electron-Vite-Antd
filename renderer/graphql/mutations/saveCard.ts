import { gql, DocumentNode } from '@apollo/client'

export const SAVE_CARD: DocumentNode = gql`
  mutation saveCard($input: saveCardInput!) {
    saveCard(input: $input) {
      code
      content
      message
    }
  }
`
