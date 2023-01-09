/* eslint-disable no-shadow */
import nookies from 'nookies'

import { WebsiteConf } from '@config/website.conf'

interface CookieOptions {
  domain?: string
  encode?: boolean
  expires?: boolean
  httpOnly?: boolean
  maxAge?: number
  path?: string
  sameSite?: boolean
  secure?: boolean
}

interface Cookie {
  setItem: Function
  getItem: Function
  removeItem: Function
  hasItem: Function
}

const options: CookieOptions = {
  maxAge: 60 * 60 * 24 * 1,
  path: '/'
}

const mergeOptions: CookieOptions = {
  ...options,
  ...WebsiteConf.cookie
}

export const cookie: Cookie = {
  setItem: (
    name: string,
    value: string,
    options: CookieOptions = mergeOptions
  ) => {
    nookies.set(null, name, value, options)
  },
  getItem: (name: string) => {
    const cookies = nookies.get()
    return cookies[name]
  },
  removeItem: (name: string, options: CookieOptions = mergeOptions) => {
    nookies.destroy(null, name, options)
  },
  hasItem: (name: string) => {
    return Boolean(cookie.getItem(name)) || cookie.getItem(name) === ''
  }
}
