import { createContext, useContext, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { isEmpty } from 'lodash'

import { cookie } from '@electron/utils'
import {
  actions as appActions,
  asyncActions as appAsyncActions
} from '@store/app'

const AppContext = createContext({})

function AppContextProvider(props: any) {
  const { actions, appState, asyncActions, children } = props

  const appApi = useMemo(
    () => ({
      ...actions,
      ...asyncActions
    }),
    [actions, asyncActions]
  )

  const contextValue = useMemo(() => [appState, appApi], [appApi, appState])

  useEffect(() => {
    const { currency, storeConfig } = appState

    if (!isEmpty(storeConfig)) {
      const { code: storeCode } = storeConfig
      const { code: currencyCode } = currency

      if (!cookie.hasItem('currency_code'))
        cookie.setItem('currency_code', currencyCode)
      if (!cookie.hasItem('store_code')) cookie.setItem('store_code', storeCode)
    }
  }, [appState])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

const mapStateToProps = ({ app }: any) => ({ appState: app })
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(appActions, dispatch),
  asyncActions: bindActionCreators(appAsyncActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContextProvider)

export const useAppContext = () => useContext(AppContext)
