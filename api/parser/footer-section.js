import { parseImageEntry, parseLinkEntry } from './utils'

const parseFooterSection = entry => {
  const { companyName, moreTitle, newsTitle, newsDescription } = entry.fields
  const email = parseLinkEntry(entry.fields.email)
  const phoneNumber = parseLinkEntry(entry.fields.phoneNumber)

  const locations = entry.fields.locations.map(location => {
    const { title } = location.fields
    const image = parseImageEntry(location.fields.image)
    return { title, image }
  })

  const moreItems = entry.fields.moreItems.map(item => {
    const image = parseImageEntry(item.fields.image)
    const link = parseLinkEntry(item.fields.link)
    return { image, link }
  })

  return {
    companyName,
    email,
    phoneNumber,
    locations,
    moreTitle,
    moreItems,
    newsTitle,
    newsDescription }
}

export default parseFooterSection
