import { gql } from '@apollo/client'

export const CREAT_EXPRESS_TOKEN = gql`
  mutation createPaypalExpressToken(
    $cartId: String!
    $code: String!
    $express_button: Boolean
    $cancel_url: String!
    $return_url: String!
    $success_url: String
    $pending_url: String
    $use_paypal_credit: Boolean
  ) {
    paypalExpress: createPaypalExpressToken(
      input: {
        cart_id: $cartId
        code: $code
        express_button: $express_button
        urls: {
          cancel_url: $cancel_url
          return_url: $return_url
          success_url: $success_url
          pending_url: $pending_url
        }
        use_paypal_credit: $use_paypal_credit
      }
    ) {
      token
      paypal_urls {
        edit
        start
      }
    }
  }
`
