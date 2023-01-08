import { Component } from 'react'
import { injectIntl } from 'react-intl'

class LocaleComponent extends Component {
  static instance: any = null

  constructor(props: any) {
    super(props)
    if (!LocaleComponent.instance) LocaleComponent.instance = this
  }

  render() {
    return false
  }
}
const Locale: any = LocaleComponent

export default injectIntl(Locale)

export const intl = () => {
  return Locale.instance?.props.intl
}

export const formatMessage = (...args: any[]) => {
  return intl().formatMessage(...args)
}
