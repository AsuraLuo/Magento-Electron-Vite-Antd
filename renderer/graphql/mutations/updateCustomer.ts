import { gql, DocumentNode } from '@apollo/client'

export const UPDATE_CUSTOMER_MUTATION: DocumentNode = gql`
  mutation updateCustomer($customer: CustomerInput!) {
    updateCustomer(input: $customer) {
      customer {
        default_billing
        default_shipping
        email
        firstname
        is_subscribed
        lastname
      }
    }
  }
`
