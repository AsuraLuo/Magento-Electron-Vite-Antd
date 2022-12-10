import { gql, DocumentNode } from '@apollo/client'

export const GET_SORT_FIELDS: DocumentNode = gql`
  query getSortFields($search: String, $filters: ProductAttributeFilterInput) {
    productSort: products(search: $search, filter: $filters) {
      sort_fields {
        default
        options {
          label
          value
        }
      }
    }
  }
`
