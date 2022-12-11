import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'

import { createClient, createStore } from '@eletron/core'
import { ConfigProvider } from '@eletron/ui'
import { reducer } from '@store/create'

import AppShell from '@components/AppShell'

const App = () => {
  const client = createClient()
  const store = createStore(reducer)

  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <ConfigProvider
          prefixCls="apax"
          theme={{
            token: {
              colorPrimary: '#00b96b'
            }
          }}
        >
          <AppShell>
            <div>App</div>
          </AppShell>
        </ConfigProvider>
      </ReduxProvider>
    </ApolloProvider>
  )
}

export default App
