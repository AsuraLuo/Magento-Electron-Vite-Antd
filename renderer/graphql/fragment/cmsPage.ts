import {gql} from '@apollo/client'

export const cmsPage = gql`
  fragment cmsPage on CmsPage {
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
`
