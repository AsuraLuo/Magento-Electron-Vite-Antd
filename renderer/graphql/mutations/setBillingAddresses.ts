import { gql, DocumentNode } from '@apollo/client'

export const SET_BILLING_ADDRESSES: DocumentNode = gql`
  mutation setBillingAddresses(
    $cartId: String!
    $addresses: BillingAddressInput!
  ) {
    billingAddress: setBillingAddressOnCart(
      input: { cart_id: $cartId, billing_address: $addresses }
    ) {
      cart {
        billing_address {
          city
          company
          country {
            code
            label
          }
          firstname
          lastname
          postcode
          region {
            code
            label
            region_id
          }
          street
          telephone
        }
      }
    }
  }
`
