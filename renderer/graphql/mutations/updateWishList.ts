import { gql } from '@apollo/client'

import { price_range } from '../fragment/priceRange'
import { configurableProduct } from '../fragment/configurableProduct'

export const UPDATE_WISHLIST = gql`
  mutation updateWishList(
    $wishlistId: ID!
    $wishlistItems: [WishlistItemUpdateInput!]!
  ) {
    updateProductsInWishlist(
      wishlistId: $wishlistId
      wishlistItems: $wishlistItems
    ) {
      user_errors {
        code
        message
      }
      wishlist {
        key: id
        items {
          added_at
          description
          key: id
          product {
            key: id
            image {
              url
              label
            }
            url_key
            name
            sku
            price_range {
              ...price_range
              __typename
            }
            ...configurableProduct
            rating_summary
            review_count
          }
          qty
        }
        items_count
        sharing_code
      }
    }
  }
  ${price_range}
  ${configurableProduct}
`
