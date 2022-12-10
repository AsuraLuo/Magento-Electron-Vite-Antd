import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

const isLogger: boolean = import.meta.env.REACT_APP_REDUX_LOGGER === '1'
const isProd: boolean = import.meta.env.NODE_ENV === 'production'

export const createStore = (reducer: any) => {
  const middleware: any = []
  const logger = createLogger({
    collapsed: false
  })

  if (isLogger) middleware.push(logger)

  return configureStore({
    reducer: combineReducers(reducer),
    devTools: !isProd,
    preloadedState: {},
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      ...middleware
    ]
  })
}
