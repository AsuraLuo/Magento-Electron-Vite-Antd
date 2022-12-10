import { gql, DocumentNode } from '@apollo/client'

export const GET_COUNTRIY_NAME: DocumentNode = gql`
  query getCountryName($code: String) {
    country(id: $code) {
      locale: full_name_locale
    }
  }
`
