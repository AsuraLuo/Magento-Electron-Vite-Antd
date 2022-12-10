import { gql, DocumentNode } from '@apollo/client'

export const categoryVariant: DocumentNode = gql`
  fragment categoryVariant on ConfigurableVariant {
    attributes {
      code
      uid
    }
    product {
      price_range {
        ...price_range
        __typename
      }
      small_image {
        label
        url(width: 384, height: 512)
      }
      thumbnail {
        url(width: 45, height: 60)
      }
      hover_image(width: 384, height: 512)
    }
  }
`
