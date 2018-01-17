import { parseImageEntry, parseLinkEntry } from './utils'

const parseHighlightedProjects = entry => {
  const projects = entry.fields.projects.map(project => {
    const { title, subtitle } = project.fields
    const image = parseImageEntry(project.fields.image)
    const link = parseLinkEntry(project.fields.link)
    return { title, subtitle, image, link }
  })
  const link = parseLinkEntry(entry.fields.link)
  return { projects, link }
}

export default parseHighlightedProjects
