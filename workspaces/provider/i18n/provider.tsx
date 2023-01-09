import { useEffect } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { isEmpty } from 'lodash'

import { cookie, toReactIntl } from '@electron/utils'
import { WebsiteConf } from '@config/website.conf'

const LocaleContextProvider = ({ appState, i18nState, ...props }: any) => {
  const { locale } = appState.storeConfig
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = i18nState.messages ?? {}
  const language = toReactIntl(locale)

  const onIntlError = (error: any) => {
    if (messages) {
      if (error.code === 'MISSING_TRANSLATION') {
        console.warn('Missing translation', error.message)
        return
      }
      throw error
    }
  }

  useEffect(() => {
    const fetchLocale = async () => {
      try {
        const cache = cookie.getItem('locale_code')
        const key = cache || WebsiteConf.i18n.locale
        const json = key.replace(/-/, '_')

        // Fetch i18n locale
        const result = await fetch(
          `${window.location.origin}/i18n/${json}.json`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            method: 'GET',
            mode: 'cors'
          }
        )

        const data = await result.json()
        // setLocale(key)
        // setMessages({ ...data })
        // dispatch(
        //   i18nActions.setI18nConfig({
        //     key,
        //     messages: data
        //   })
        // )
        console.info(data)
        if (!cache) cookie.setItem('locale_code', key)
      } catch (error: any) {
        const Console = console
        Console.error(error.message)
      }
    }

    if (isEmpty(messages)) fetchLocale()
  }, [messages])

  return (
    <IntlProvider
      key={language}
      defaultLocale={toReactIntl(locale)}
      locale={language}
      messages={messages}
      {...props}
      onError={onIntlError}
    />
  )
}

const mapStateToProps = ({ app, i18n }: any) => ({
  appState: app,
  i18nState: i18n
})

export default connect(mapStateToProps)(LocaleContextProvider)
