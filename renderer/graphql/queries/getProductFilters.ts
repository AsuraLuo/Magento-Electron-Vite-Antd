import { gql, DocumentNode } from '@apollo/client'

export const GET_PRODUCT_FILTERS: DocumentNode = gql`
  query getProductFilters(
    $search: String
    $filters: ProductAttributeFilterInput
  ) {
    productFilters: products(search: $search, filter: $filters) {
      aggregations {
        label
        count
        attribute_code
        options {
          count
          label
          value
          swatch_data {
            type
            value
          }
        }
      }
    }
  }
`
