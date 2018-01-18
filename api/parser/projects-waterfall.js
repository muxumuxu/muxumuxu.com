import { parseImageEntry, parseLinkEntry } from './utils'

const parseProjectsWaterfall = entry => {
  const { title } = entry.fields
  const projects = entry.fields.projects.map(project => {
    const { title, subtitle } = project.fields
    const image = parseImageEntry(project.fields.image)
    const link = parseLinkEntry(project.fields.link)
    return { title, subtitle, image, link }
  })
  return { title, projects }
}

export default parseProjectsWaterfall
