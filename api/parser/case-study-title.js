import { parseLinkEntry } from './utils'

const parseCaseStudyTitle = entry => {
  const { title } = entry.fields
  const information = entry.fields.information.map(information => {
    const { title, description } = information.fields
    return { title, description }
  })
  let link = null
  if (entry.fields.link) {
    link = {
      title: entry.fields.link.fields.title,
      link: parseLinkEntry(entry.fields.link.fields.links[0])
    }
  }
  return { title, information, link }
}

export default parseCaseStudyTitle
