import { gql, DocumentNode } from '@apollo/client'

export const GET_CUSTOMER_NEWS_LETTER: DocumentNode = gql`
  query getCustomerNewsLetter {
    customer {
      subscribed: is_subscribed
    }
  }
`
