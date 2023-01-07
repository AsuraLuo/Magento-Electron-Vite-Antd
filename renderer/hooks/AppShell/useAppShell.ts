import { useEffect, useState } from 'react'

import { useAwaitQuery } from '@electron/hooks'
import { GET_STORE_CONFIG } from '@graphql/queries/getStoreConfig'

export const useAppShell = () => {
  const getStoreConfig: Function = useAwaitQuery(GET_STORE_CONFIG)
  const [isRender, setIsRender] = useState<boolean>(false)
  const [storeConfig, setStoreConfig] = useState<any>(null)

  useEffect(() => {
    const fetchStoreConfig = async () => {
      try {
        const { data } = await getStoreConfig()
        const result: any = data?.storeConfig ?? {}
        setStoreConfig(result)
        setIsRender(true)
      } catch (error) {
        console.error(error)
      }
    }

    fetchStoreConfig()
  }, [])

  return {
    isRender,
    storeConfig
  }
}
