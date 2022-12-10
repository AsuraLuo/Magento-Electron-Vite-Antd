import { gql, DocumentNode } from '@apollo/client'

import { addresses } from '../fragment/addresses'

export const GET_CUSTOMER_ACCOUNT: DocumentNode = gql`
  query getCustomerAccount {
    customer {
      default_billing
      default_shipping
      email
      firstname
      is_subscribed
      lastname
      addresses {
        ...addresses
        __typename
      }
    }
  }
  ${addresses}
`
