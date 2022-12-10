import { ReducersMapObject } from '@reduxjs/toolkit'

import { reducer as appReducer } from './app'
import { reducer as i18nReducer } from './i18n'

export const reducer: ReducersMapObject = {
  app: appReducer,
  i18n: i18nReducer
}
