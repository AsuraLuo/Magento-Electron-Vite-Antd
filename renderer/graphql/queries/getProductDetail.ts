import { gql, DocumentNode } from '@apollo/client'

import { price_range } from '../fragment/priceRange'
import { price_tiers } from '../fragment/priceTiers'
import { configurableProduct } from '../fragment/configurableProduct'

export const GET_PRODUCT_DETAIL: DocumentNode = gql`
  query getProductDetail($filter: ProductAttributeFilterInput) {
    products(filter: $filter) {
      items {
        id
        sku
        name
        url_key
        main_image: image {
          label
          url
        }
        meta_title
        meta_keyword
        meta_description
        price_range {
          ...price_range
          __typename
        }
        price_tiers {
          ...price_tiers
          __typename
        }
        stock_status
        description {
          html
        }
        short_description {
          html
        }
        media_gallery {
          disabled
          label
          position
          thumbnail: url(width: 1125, height: 1500)
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
        shipping_policy {
          content
        }
        show_attribute {
          code
          label
          value
        }
        review_count
        rating_summary
        ...configurableProduct
        __typename
      }
    }
  }
  ${price_range}
  ${price_tiers}
  ${configurableProduct}
`
