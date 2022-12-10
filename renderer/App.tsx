import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'

import { createClient, createStore } from '@eletron/core'
import { reducer } from '@store/create'

import AppShell from '@components/AppShell'

const App = () => {
  const client = createClient()
  const store = createStore(reducer)

  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <AppShell>
          <div>App</div>
        </AppShell>
      </ReduxProvider>
    </ApolloProvider>
  )
}

export default App
