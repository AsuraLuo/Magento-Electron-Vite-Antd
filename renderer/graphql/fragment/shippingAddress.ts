import { gql, DocumentNode } from '@apollo/client'

export const shippingAddress: DocumentNode = gql`
  fragment shippingAddress on ShippingCartAddress {
    firstname
    lastname
    city
    company
    country {
      code
      label
    }
    region {
      code
      label
      region_id
    }
    postcode
    street
    telephone
    available_shipping_methods {
      amount {
        value
      }
      available
      carrier_code
      carrier_title
      method_code
      method_title
    }
    selected_shipping_method {
      amount {
        currency
        value
      }
      carrier_code
      carrier_title
      method_code
      method_title
    }
  }
`
