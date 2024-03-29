import { parseLinkEntry } from './utils'

const parseBlogArticleLink = entry => {
  const { title, description } = entry.fields
  const link = parseLinkEntry(entry.fields.link)
  return { title, description, link }
}

export default parseBlogArticleLink
