import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'

import { createClient, createStore } from '@eletron/core'

import { reducer } from '@store/index'

const App = () => {
  const client = createClient()
  const store = createStore(reducer)

  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <div>App</div>
      </ReduxProvider>
    </ApolloProvider>
  )
}

export default App
