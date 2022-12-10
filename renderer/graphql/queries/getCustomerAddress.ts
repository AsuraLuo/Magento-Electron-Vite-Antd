import { gql, DocumentNode } from '@apollo/client'

export const GET_CUSTOMER_ADDRESS: DocumentNode = gql`
  query getCustomerAddress {
    customer {
      address: addresses {
        city
        company
        country_code
        default_billing
        default_shipping
        firstname
        key: id
        lastname
        postcode
        region {
          region
          region_code
          region_id
        }
        region_id
        street
        telephone
      }
    }
  }
`
