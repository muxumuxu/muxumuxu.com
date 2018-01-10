import contentful from './contentful'
import memoizee from 'memoizee'
import { parsePage } from './parser'

const maxAge = process.env.NODE_ENV === 'production'
  ? 1000 * 120
  : 1000 * 10

/* Fetch a all record of a specific contentful content type */
const fetchContentType = memoizee((contentTypeId, locale = '*', include = 4) => {
  return contentful
    .getEntries({ content_type: contentTypeId, locale, include })
    .then(response => response.items)
}, { maxAge })

/* Fetch all pages */
export const fetchPages = locale =>
  fetchContentType('pageContainer', locale)
    .then(entries => entries.reduce((prev, curr) => {
      const route = curr.fields.route // Pages must have at least a 'route' to access them
      prev[route] = parsePage(curr)
      return prev
    }, {}))

export default { fetchPages }
