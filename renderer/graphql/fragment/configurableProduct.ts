import { gql, DocumentNode } from '@apollo/client'

import { customerVariant } from './customerVariant'

export const configurableProduct: DocumentNode = gql`
  fragment configurableProduct on ConfigurableProduct {
    configurable_options {
      attribute_code
      id: uid
      label
      position
      values {
        label
        swatch_data {
          value
        }
        uid
      }
    }
    variants {
      ...customerVariant
      __typename
    }
  }
  ${customerVariant}
`
