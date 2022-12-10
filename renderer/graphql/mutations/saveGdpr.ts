import { gql, DocumentNode } from '@apollo/client'

export const SAVE_GDPR: DocumentNode = gql`
  mutation saveGdpr($input: SaveGdprInput) {
    saveGdpr(input: $input) {
      code
      content
      message
    }
  }
`
