import { gql, DocumentNode } from '@apollo/client'

import { categoryVariant } from './categoryVariant'

export const categoryProduct: DocumentNode = gql`
  fragment categoryProduct on ConfigurableProduct {
    configurable_options {
      attribute_code
      id: uid
      label
      values {
        label
        swatch_data {
          value
        }
        uid
      }
    }
    variants {
      ...categoryVariant
      __typename
    }
  }
  ${categoryVariant}
`
