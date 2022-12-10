import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      regions: available_regions {
        code
        value: id
        label: name
      }
      label: full_name_locale
      value: id
    }
  }
`
