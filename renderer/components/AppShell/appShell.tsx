import { FC, ReactNode } from 'react'

import { PwaContextProvider } from '@electron/provider'
import { ConfigProvider, Locale } from '@electron/ui'
import { useAppShell } from '@hooks/AppShell'

import Header from '@components/Header'
import Footer from '@components/Footer'

interface AppShellProps {
  children?: ReactNode
}

const AppShell: FC<AppShellProps> = ({ children }) => {
  const { isRender } = useAppShell()

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
          <Locale />
          <Header />
          {children}
          <Footer />
        </ConfigProvider>
      </PwaContextProvider>
    </>
  ) : null
}

export default AppShell
