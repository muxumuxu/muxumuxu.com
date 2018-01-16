import { parseImageEntry } from './utils'

const parseTwoColumnImage = entry => {
  const title = entry.fields.title
  const description = {
    title: entry.fields.description.fields.title,
    description: entry.fields.description.fields.description
  }
  const image = parseImageEntry(entry.fields.image)
  return { title, description, image }
}

export default parseTwoColumnImage
