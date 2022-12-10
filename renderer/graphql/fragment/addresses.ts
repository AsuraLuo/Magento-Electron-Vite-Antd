import { gql, DocumentNode } from '@apollo/client'

export const addresses: DocumentNode = gql`
  fragment addresses on CustomerAddress {
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
`
