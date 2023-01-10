import { useEffect, useState } from 'react'

import { GET_CATEGOR_TREE } from '@graphql/queries/getCategoryTree'
import { useAwaitQuery } from '@electron/hooks'

export const useNavigation = () => {
  const getCategoryTree: Function = useAwaitQuery(GET_CATEGOR_TREE)
  const [categoryTree, setCategoryTree] = useState<any[]>([])

  useEffect(() => {
    const fetchCategoryTree = async () => {
      try {
        const { data } = await getCategoryTree()
        const result: any[] = data?.categoryList?.[0]?.children ?? []
        setCategoryTree([...result])
      } catch (error) {
        console.error(error)
      }
    }

    fetchCategoryTree()
  }, [getCategoryTree])

  return {
    categoryTree
  }
}
