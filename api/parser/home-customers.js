import { parseImageEntry, parseLinkEntry } from './utils'

const parseHomeCustomers = entry => {
  const description = entry.fields.description
  const link = parseLinkEntry(entry.fields.link)
  const logos = entry.fields.logos.map(parseImageEntry)
  return { description, link, logos }
}

export default parseHomeCustomers
