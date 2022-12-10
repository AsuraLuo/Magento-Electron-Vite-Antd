import {gql} from '@apollo/client'

export const LOGIN_AS_CUSTOMER_MUTATION = gql`
  mutation generateCustomerTokenAsAdmin($email: String!) {
    loginAsCustomer: generateCustomerTokenAsAdmin(
      input: {customer_email: $email}
    ) {
      token: customer_token
    }
  }
`
