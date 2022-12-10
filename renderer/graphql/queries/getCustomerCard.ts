import { gql, DocumentNode } from '@apollo/client'

export const GET_CUSTOMER_CARD: DocumentNode = gql`
  query getCustomerCard {
    cards {
      brand
      exp_month
      id
      last4
    }
  }
`
