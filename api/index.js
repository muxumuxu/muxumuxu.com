import * as contentful from 'contentful'
import memoizee from 'memoizee'
import { default as parsePage } from './parse-page'

const maxAge = process.env.NODE_ENV === 'production'
  ? 1000 * 120
  : 1000 * 1

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

const contentfulClient = contentful.createClient({
  space: `${SPACE_ID}`,
  accessToken: `${ACCESS_TOKEN}`
})

/* Fetch a all record of a specific contentful content type */
const fetchContentType = memoizee((contentTypeId, locale = 'en', include = 4) => {
  return contentfulClient
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
