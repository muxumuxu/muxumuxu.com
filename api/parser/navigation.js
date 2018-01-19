import { parseImageEntry, parseLinkEntry } from './utils'

const parseNavigation = entry => {
  const logo = parseImageEntry(entry.fields.logo)
  const menu = entry.fields.menu

  let links = []
  if (entry.fields.links) {
    links = entry.fields.links.map(parseLinkEntry)
  }

  return { logo, menu, links }
}

export default parseNavigation
