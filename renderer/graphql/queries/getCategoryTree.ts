import { gql, DocumentNode } from '@apollo/client'

export const GET_CATEGOR_TREE: DocumentNode = gql`
  query getCategoryTree {
    categoryList {
      id
      children {
        id
        name
        level
        url_path
        include_in_menu
        position
        children {
          id
          name
          level
          url_path
          include_in_menu
          position
          children {
            id
            name
            level
            url_path
            include_in_menu
            position
          }
        }
      }
    }
  }
`
