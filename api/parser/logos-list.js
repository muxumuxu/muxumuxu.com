import { parseImageEntry } from './utils'

const parseLogosList = entry => {
  const logos = entry.fields.logos.map(parseImageEntry)
  return { logos }
}

export default parseLogosList
