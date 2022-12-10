import { gql, DocumentNode } from '@apollo/client'

export const CREATE_CUSTOMER_ADDRESS: DocumentNode = gql`
  mutation createCustomerAddress($address: CustomerAddressInput!) {
    customerAddress: createCustomerAddress(input: $address) {
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
`
