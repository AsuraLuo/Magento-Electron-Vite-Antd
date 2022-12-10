import { gql, DocumentNode } from '@apollo/client'

export const GET_URL_RESOLVER: DocumentNode = gql`
  query getUrlResolver($url: String!) {
    urlResolver(url: $url) {
      id
      redirectCode
      relative_url
      type
    }
  }
`
