/**
 * Convert locale from react-intl BCP 47 language code, to Magento standard
 *
 * @param {string} string
 * @returns {string} A locale string (e.g. `fr_FR`).
 */
export const fromReactIntl: Function = (string: string) => {
  return string.replace(/\-/g, '_')
}

/**
 * Convert locale from Magento standard to react-intl BCP 47 language code
 *
 * @param {string} string
 * @returns {string} A string (e.g. `fr-FR`).
 */
export const toReactIntl: Function = (string: any) => {
  return string.replace(/\_/g, '-')
}
