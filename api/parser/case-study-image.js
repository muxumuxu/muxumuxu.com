import { parseImageEntry } from './utils'

const parseCaseStudyImage = entry => ({ image: parseImageEntry(entry.fields.image) })

export default parseCaseStudyImage
