import { FC, ReactNode } from 'react'

import { PwaContextProvider } from '@electron/provider'
import { ConfigProvider } from '@electron/ui'
import { useAppShell } from '@hooks/AppShell'

import Header from '@components/Header'

interface AppShellProps {
  children?: ReactNode
}

const AppShell: FC<AppShellProps> = ({ children }) => {
  const { isRender, storeConfig } = useAppShell()

  return isRender ? (
    <>
      <PwaContextProvider>
        <ConfigProvider
          prefixCls="apax"
          theme={{
            token: {
              colorPrimary: '#00b96b'
            }
          }}
        >
          <Header />
          <p>{storeConfig.copyright}</p>
          {children}
        </ConfigProvider>
      </PwaContextProvider>
    </>
  ) : null
}

export default AppShell
