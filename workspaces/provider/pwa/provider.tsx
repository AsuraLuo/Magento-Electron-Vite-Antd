import AppContextProvider from '../app'
import LocaleContextProvider from '../i18n'

const contextProviders = [LocaleContextProvider, AppContextProvider]

const PwaContextProvider = ({ children }: any) => {
  return contextProviders.reduceRight((memo, ContextProvider) => {
    return <ContextProvider>{memo}</ContextProvider>
  }, children)
}

export default PwaContextProvider
