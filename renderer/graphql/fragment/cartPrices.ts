import { gql } from '@apollo/client'

export const cart_prices = gql`
  fragment cart_prices on CartPrices {
    applied_taxes {
      label
      amount {
        value
      }
    }
    discounts {
      label
      amount {
        value
      }
    }
    grand_total {
      value
    }
    subtotal_excluding_tax {
      value
    }
    subtotal_including_tax {
      value
    }
    subtotal_with_discount_excluding_tax {
      value
    }
  }
`
