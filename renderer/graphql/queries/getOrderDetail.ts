import { gql, DocumentNode } from '@apollo/client'

export const GET_ORDER_DETAIL: DocumentNode = gql`
  query getCustomerOrderDetails(
    $filter: CustomerOrdersFilterInput
    $currentPage: Int
    $pageSize: Int
  ) {
    customer {
      orders(filter: $filter, currentPage: $currentPage, pageSize: $pageSize) {
        items {
          billing_address {
            city
            country_code
            firstname
            lastname
            postcode
            region
            region_id
            street
            telephone
          }
          invoices {
            key: id
            items {
              key: id
              order_item {
                key: id
                product_name
                product_sale_price {
                  value
                }
                product_sku
                quantity_invoiced
                selected_options {
                  label
                  value
                }
                status
              }
              product_name
              product_sale_price {
                value
              }
              product_sku
              quantity_invoiced
            }
            number
            total {
              discounts {
                amount {
                  value
                }
              }
              subtotal {
                value
              }
              grand_total {
                value
              }
              total_shipping {
                value
              }
            }
          }
          items {
            Key: id
            product_image(width: 100, height: 100)
            product_url_key
            product_name
            product_sku
            product_sale_price {
              value
            }
            quantity_ordered
            quantity_shipped
            quantity_canceled
            selected_options {
              label
              value
            }
            status
          }
          shipments {
            key: id
            items {
              key: id
              order_item {
                key: id
                product_name
                product_sale_price {
                  value
                }
                product_sku
                quantity_shipped
                selected_options {
                  label
                  value
                }
                status
              }
              product_name
              product_sale_price {
                value
              }
              product_sku
              quantity_shipped
            }
            number
          }
          key: id
          number
          order_date
          payment_methods {
            name
          }
          status
          shipping_method
          shipping_address {
            city
            country_code
            firstname
            lastname
            postcode
            region
            region_id
            street
            telephone
          }
          total {
            grand_total {
              value
            }
            subtotal {
              value
            }
            total_shipping {
              value
            }
            discounts {
              amount {
                value
              }
            }
          }
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
