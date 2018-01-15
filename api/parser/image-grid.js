import { parseImageEntry } from './utils'

const parseImageGrid = entry => {
  const title = entry.fields.title
  const images = entry.fields.images.map(image => {
    const { title, subtitle, gifUrl } = image.fields
    const picture = parseImageEntry(image.fields.image)
    const emoji = parseImageEntry(image.fields.emoji)
    return { title, subtitle, gifUrl, picture, emoji }
  })
  return { title, images }
}

export default parseImageGrid
