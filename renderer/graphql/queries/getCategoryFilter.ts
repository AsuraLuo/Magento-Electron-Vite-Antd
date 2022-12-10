import { gql, DocumentNode } from '@apollo/client'

export const GET_CATEGORY_FILTER: DocumentNode = gql`
  query getCategoryFilter($filters: CategoryFilterInput) {
    categoryList(filters: $filters) {
      url_key
      children {
        id
        url_key
      }
    }
  }
`
