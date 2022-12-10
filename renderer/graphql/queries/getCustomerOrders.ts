import { gql, DocumentNode } from '@apollo/client'

export const GET_CUSTOMER_ORDERS: DocumentNode = gql`
  query getCustomerOrders(
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
          shipping_address {
            firstname
            lastname
          }
          total {
            grand_total {
              value
            }
          }
          order_date
        }
        page_info {
          current_page
          page_size
          total_pages
        }
        total_count
      }
    }
  }
`
