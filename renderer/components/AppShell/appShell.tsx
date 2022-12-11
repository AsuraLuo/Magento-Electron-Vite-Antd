import { FC, ReactNode } from 'react'

import { useAppShell } from '@hooks/AppShell'

import Header from '@components/Header'

interface AppShellProps {
  children?: ReactNode
}

const AppShell: FC<AppShellProps> = ({ children }) => {
  const { isRender, storeConfig } = useAppShell()

  return isRender ? (
    <>
      <Header />
      <p>{storeConfig.copyright}</p>
      {children}
    </>
  ) : null
}

export default AppShell
