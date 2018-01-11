import { parseImageEntry, parseLinkEntry } from './utils'

const parseNavigation = entry => {
  const logo = parseImageEntry(entry.fields.logo)

  let links = []
  if (entry.fields.links) {
    links = entry.fields.links.map(parseLinkEntry)
  }

  return {
    logo,
    links
  }
}

export default parseNavigation
