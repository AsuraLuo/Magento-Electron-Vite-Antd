import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters'

export const shrinkQuery = (fullURL: string) => {
  const url: URL = new URL(fullURL)

  const query = url.searchParams.get('query')

  if (!query) {
    return fullURL
  }

  const strippedQuery = stripIgnoredCharacters(query)
  url.searchParams.set('query', strippedQuery)

  return url.toString()
}
