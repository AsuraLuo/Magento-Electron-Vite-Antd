import { gql } from '@apollo/client'

export const price_range = gql`
  fragment price_range on PriceRange {
    minimum_price {
      discount {
        amount_off
      }
      final_price {
        value
      }
      regular_price {
        value
      }
    }
    maximum_price {
      discount {
        amount_off
      }
      final_price {
        value
      }
      regular_price {
        value
      }
    }
  }
`
