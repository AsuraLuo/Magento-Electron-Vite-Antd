import { gql, DocumentNode } from '@apollo/client'

import { price_range } from './priceRange'

export const customerVariant: DocumentNode = gql`
  fragment customerVariant on ConfigurableVariant {
    attributes {
      code
      uid
    }
    product {
      sku
      price_range {
        ...price_range
        __typename
      }
      small_image {
        label
        url(width: 121, height: 151)
      }
      hover_image
      stock_status
      media_gallery {
        disabled
        label
        position
        thumbnail: url
        ... on ProductVideo {
          video_content {
            media_type
            video_provider
            video_url
            video_title
            video_description
            video_metadata
          }
        }
        __typename
      }
    }
  }
  ${price_range}
`
