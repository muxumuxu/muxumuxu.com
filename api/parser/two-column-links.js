import { parseLinkEntry } from './utils'

const parseTwoColumnLinks = entry => {
  const title = entry.fields.title
  const description = {
    title: entry.fields.description.fields.title,
    description: entry.fields.description.fields.description
  }
  const list = {
    title: entry.fields.list.fields.title,
    links: entry.fields.list.fields.links.map(parseLinkEntry)
  }
  return { title, description, list }
}

export default parseTwoColumnLinks
