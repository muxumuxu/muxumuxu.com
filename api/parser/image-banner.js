import { parseImageEntry, parseLinkEntry } from './utils'

const parseImageBanner = entry => {
  const title = entry.fields.description
  const backgroundImage = parseImageEntry(entry.fields.backgroundImage)
  const link = parseLinkEntry(entry.fields.link)

  return {
    title,
    backgroundImage,
    link
  }
}

export default parseImageBanner
