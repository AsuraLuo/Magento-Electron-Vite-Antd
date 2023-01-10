import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { isEmpty } from 'lodash'

import { cookie, toReactIntl } from '@electron/utils'
import { WebsiteConf } from '@config/website.conf'
import { actions as i18nActions } from '@store/i18n'

const LocaleContextProvider = ({ ...props }) => {
  const dispatch = useDispatch()
  const storeConfig = useSelector((state: any) => state.app.storeConfig)
  const messages = useSelector((state: any) => state.i18n.messages)

  const locale = useMemo(() => {
    return storeConfig?.locale ?? WebsiteConf.i18n.locale
  }, [storeConfig])

  const language = useMemo(() => {
    return toReactIntl(locale)
  }, [locale])

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
        dispatch(
          i18nActions.setI18nConfig({
            key,
            messages: data
          })
        )
        if (!cache) cookie.setItem('locale_code', key)
      } catch (error: any) {
        const Console = console
        Console.error(error.message)
      }
    }

    if (isEmpty(messages)) fetchLocale()
  }, [dispatch, messages])

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

export default LocaleContextProvider
