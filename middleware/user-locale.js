const defaultCountryCode = 'fr'
const supportedLocales = [{ countryCode: 'fr', locale: 'fr-FR' }]

const resolveLocaleFromCountryCode = countryCode =>
  supportedLocales.find(sup => sup.countryCode === countryCode)

export default function (context) {
  const requestedLocaleOrPage = context.route.params.locale

  // The user locale is found in the url
  const object = resolveLocaleFromCountryCode(requestedLocaleOrPage)
  if (object) {
    if (!context.route.params.page) {
      context.route.params.page = '/'
    }
    context.route.params.locale = object.locale
    context.store.commit('setLocale', object.locale)
    return
  }

  // Resolve locale from app store
  const storeLocale = context.store.state.locale
  if (storeLocale) {
    const cc = supportedLocales.find(sup => sup.locale === storeLocale)
    if (cc) {
      let path = `/${cc.countryCode}`
      if (requestedLocaleOrPage) {
        path += `/${requestedLocaleOrPage}`
      }
      context.redirect(path)
      return
    }
  }

  // Resolve from accept-language
  if (process.server && context.req.headers['accept-language']) {
    // Check if the accept-language header is supported
    const countryCode = context.req.headers['accept-language'].split(',')[0]
    const cc = supportedLocales.find(sup => sup.countryCode === countryCode)
    if (cc) {
      context.redirect(`/${cc.countryCode}`)
      return
    }
  }

  // Use default locale
  let path = `/${defaultCountryCode}`
  if (requestedLocaleOrPage) {
    path += `/${requestedLocaleOrPage}`
  }
  context.redirect(path)
}
