import { gql } from '@apollo/client'

export const GET_ORDER_PRODUCTS = gql`
  query getOrderProducts(
    $filter: CustomerOrdersFilterInput
    $currentPage: Int
    $pageSize: Int
  ) {
    customer {
      orders(filter: $filter, currentPage: $currentPage, pageSize: $pageSize) {
        items {
          key: id
          number
          status
          items {
            product_sku
            product_name
            product_url_key
          }
        }
      }
    }
  }
`
