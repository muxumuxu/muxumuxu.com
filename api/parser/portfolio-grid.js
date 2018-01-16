import { parseImageEntry, parseLinkEntry } from './utils'

const parsePortfolioGrid = entry => {
  const title = entry.fields.title
  const projects1 = entry.fields.projects1.map(project => {
    const { title, subtitle } = project.fields
    const image = parseImageEntry(project.fields.image)
    const link = parseLinkEntry(project.fields.link)
    return { title, subtitle, image, link }
  })
  let projects2 = null
  if (entry.fields.projects2) {
    projects2 = entry.fields.projects2.map(project => {
      const { title, subtitle } = project.fields
      const image = parseImageEntry(project.fields.image)
      const link = parseLinkEntry(project.fields.link)
      return { title, subtitle, image, link }
    })
  }
  let projects3 = null
  if (entry.fields.projects3) {
    projects3 = entry.fields.projects3.map(project => {
      const { title, subtitle } = project.fields
      const image = parseImageEntry(project.fields.image)
      const link = parseLinkEntry(project.fields.link)
      return { title, subtitle, image, link }
    })
  }
  return { title, projects1, projects2, projects3 }
}

export default parsePortfolioGrid
