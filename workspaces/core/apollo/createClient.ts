import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { parseCookies } from 'nookies'

import { shrinkQuery } from './shrinkQuery'
import { typePolicies } from './policies'

const customFetchToShrinkQuery = (uri: string, options: any) => {
  let url = uri
  if (options.method === 'GET') {
    url = shrinkQuery(uri)
  }
  return fetch(url, options)
}

export const createClient = () => {
  const httpLink = new HttpLink({
    uri: `${window.location.origin}api/graphql`,
    credentials: 'same-origin',
    fetch: customFetchToShrinkQuery,
    useGETForQueries: true
  })

  const middlewareLink = new ApolloLink((operation, forward) => {
    const exsistCookies: any = parseCookies()
    const storeCode: string =  ''
    const currencyCode: string = ''
    const context = operation.getContext()

    operation.setContext({
      headers: {
        Authorization: exsistCookies.access_token
          ? `Bearer ${exsistCookies.access_token}`
          : null,
        Store: exsistCookies?.store_code ?? storeCode,
        'Content-Currency': exsistCookies?.currency_code ?? currencyCode,
        ...context?.headers
      }
    })

    return forward(operation)
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }, index) => {
        graphQLErrors[index].message = message.replace('GraphQL error: ', '')

        console.error(graphQLErrors[index].message)
      })
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`)
    }
  })

  const apolloLink = middlewareLink.concat(httpLink)

  return new ApolloClient({
    link: errorLink.concat(apolloLink),
    cache: new InMemoryCache({
      addTypename: false,
      typePolicies
    }).restore({}),
    connectToDevTools: true,
    ssrMode: false,
    defaultOptions: {
      query: {
        fetchPolicy: 'cache-first'
      }
    }
  })
}
