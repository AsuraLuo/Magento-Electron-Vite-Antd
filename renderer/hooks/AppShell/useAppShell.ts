import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GET_STORE_CONFIG } from '@graphql/queries/getStoreConfig'
import { useAwaitQuery } from '@electron/hooks'
import { actions as appActions } from '@store/app'

export const useAppShell = () => {
  const dispatch = useDispatch()
  const getStoreConfig: Function = useAwaitQuery(GET_STORE_CONFIG)
  const storeConfig = useSelector((state: any) => state.app.storeConfig)
  const [isRender, setIsRender] = useState<boolean>(false)

  useEffect(() => {
    const fetchStoreConfig = async () => {
      try {
        const { data } = await getStoreConfig()
        dispatch(appActions.setAppConfig(data))
        setIsRender(true)
      } catch (error) {
        console.error(error)
      }
    }

    fetchStoreConfig()
  }, [dispatch, getStoreConfig])

  return {
    isRender,
    storeConfig
  }
}
