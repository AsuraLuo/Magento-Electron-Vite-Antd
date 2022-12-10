import { gql } from '@apollo/client'

export const price_tiers = gql`
  fragment price_tiers on TierPrice {
    final_price {
      value
    }
    quantity
  }
`
