import { useCallback } from 'react'
import {
  useApolloClient,
  QueryOptions,
  DocumentNode,
  ApolloQueryResult
} from '@apollo/client'

export const useAwaitQuery = (query: DocumentNode) => {
  const apolloClient = useApolloClient()

  return useCallback(
    async (options: QueryOptions) => {
      const res: ApolloQueryResult<any> = await apolloClient.query({
        ...options,
        query
      })

      return res
    },
    [apolloClient, query]
  )
}
