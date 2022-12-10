import { gql, DocumentNode } from '@apollo/client'

export const DELETE_CUSTOMER_ADDRESS: DocumentNode = gql`
  mutation deleteCustomerAddress($id: Int!) {
    customerAddress: deleteCustomerAddress(id: $id)
  }
`
