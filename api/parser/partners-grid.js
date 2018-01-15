import { parseImageEntry } from './utils'

const parsePartnersGrid = entry => {
  const title = entry.fields.title

  const partners = entry.fields.partners.map(partner => {
    const { title, subtitle } = partner.fields
    const logo = parseImageEntry(partner.fields.image)
    return { title, subtitle, logo }
  })
  return { title, partners }
}

export default parsePartnersGrid
