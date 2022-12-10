import { gql, DocumentNode } from '@apollo/client'

export const UPDATE_CUSTOMER_ADDRESS: DocumentNode = gql`
  mutation updateCustomerAddress($id: Int!, $address: CustomerAddressInput) {
    customerAddress: updateCustomerAddress(id: $id, input: $address) {
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
