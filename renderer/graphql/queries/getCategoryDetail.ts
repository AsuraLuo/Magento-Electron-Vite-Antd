import { gql, DocumentNode } from '@apollo/client'

import { categoryTree } from '../fragment/categoryTree'

export const GET_CATEGORY_DETAIL: DocumentNode = gql`
  query getCategoryDetail($filters: CategoryFilterInput) {
    categoryList(filters: $filters) {
      ...categoryTree
      __typename
    }
  }
  ${categoryTree}
`
