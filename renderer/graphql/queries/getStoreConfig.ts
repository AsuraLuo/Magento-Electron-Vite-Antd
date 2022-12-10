import { gql, DocumentNode } from '@apollo/client'

export const GET_STORE_CONFIG: DocumentNode = gql`
  query getStoreConfig {
    storeConfig {
      code
      copyright
      category_url_suffix
      sort_by: catalog_default_sort_by
      grid_page: grid_per_page
      grid_values: grid_per_page_values
      list_mode
      list_page: list_per_page
      list_values: list_per_page_values
      cms_home_page
      locale
      logo_alt
      logo_height
      logo_width
      shortcut_icon: head_shortcut_icon
      product_url_suffix
      logo_src: header_logo_src
      store_name
      secure_base_url
      secure_base_media_url
    }
    currency {
      code: base_currency_code
      symbol: base_currency_symbol
    }
  }
`
