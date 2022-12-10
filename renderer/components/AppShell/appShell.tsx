import { FC, ReactNode } from 'react'

import { useAppShell } from '@hooks/AppShell'

interface AppShellProps {
  children?: ReactNode
}

const AppShell: FC<AppShellProps> = ({ children }) => {
  const { isRender, storeConfig } = useAppShell()

  return (
    <>
      {isRender && <p>{storeConfig.copyright}</p>}
      {children}
    </>
  )
}

export default AppShell
