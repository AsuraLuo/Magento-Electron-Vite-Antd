import { gql } from '@apollo/client'

export const categoryTree = gql`
  fragment categoryTree on CategoryTree {
    id
    name
    url_path
    meta_title
    meta_keywords
    meta_description
    breadcrumbs {
      category_id
      category_name
      category_url_path
    }
  }
`
