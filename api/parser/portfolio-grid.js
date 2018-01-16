import { parseImageEntry, parseLinkEntry } from './utils'

const parsePortfolioGrid = entry => {
  const title = entry.fields.title
  const projects2 = entry.fields.projects2.map(project => {
    const { title, subtitle } = project.fields
    const image = parseImageEntry(project.fields.image)
    const link = parseLinkEntry(project.fields.link)
    return { title, subtitle, image, link }
  })
  const projects3 = entry.fields.projects3.map(project => {
    const { title, subtitle } = project.fields
    const image = parseImageEntry(project.fields.image)
    const link = parseLinkEntry(project.fields.link)
    return { title, subtitle, image, link }
  })
  let projects4 = null
  if (entry.fields.projects4) {
    projects4 = entry.fields.projects4.map(project => {
      const { title, subtitle } = project.fields
      const image = parseImageEntry(project.fields.image)
      const link = parseLinkEntry(project.fields.link)
      return { title, subtitle, image, link }
    })
  }
  return { title, projects2, projects3, projects4 }
}

export default parsePortfolioGrid
