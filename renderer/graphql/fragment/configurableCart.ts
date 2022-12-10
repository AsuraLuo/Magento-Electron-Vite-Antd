import { gql, DocumentNode } from '@apollo/client'

export const configurableCart: DocumentNode = gql`
  fragment configurableCart on ConfigurableCartItem {
    configurable_options {
      id: configurable_product_option_uid
      option_label
      value_id: configurable_product_option_value_uid
      value_label
    }
  }
`
