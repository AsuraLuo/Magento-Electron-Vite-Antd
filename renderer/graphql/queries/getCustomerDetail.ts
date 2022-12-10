import { gql, DocumentNode } from '@apollo/client'

export const GET_CUSTOMER_DETAIL: DocumentNode = gql`
  query getCustomerDetail {
    customer {
      default_billing
      default_shipping
      email
      firstname
      is_subscribed
      lastname
    }
  }
`
