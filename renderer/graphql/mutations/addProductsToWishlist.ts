import { gql } from '@apollo/client'

import { wishlistItem } from '../fragment/wishlistItem'

export const ADD_WISHLIST_MUTATION = gql`
  mutation addProductsToWishlist(
    $wishlistId: ID!
    $wishlistItems: [WishlistItemInput!]!
  ) {
    addProductsToWishlist(
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
          ...wishlistItem
        }
        items_count
        sharing_code
      }
    }
  }
  ${wishlistItem}
`
