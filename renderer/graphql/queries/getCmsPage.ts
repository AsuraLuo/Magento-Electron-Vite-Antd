import { gql, DocumentNode } from '@apollo/client'

export const GET_CMS_PAGE: DocumentNode = gql`
  query getCmsPage($id: Int, $identifier: String) {
    cmsPage(id: $id, identifier: $identifier) {
      content
      content_heading
      identifier
      meta_description
      meta_keywords
      meta_title
      page_layout
      title
      url_key
    }
  }
`
