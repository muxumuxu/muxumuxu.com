import { parseImageEntry } from './utils'

const parseCaseStudyGif = entry => ({ image: parseImageEntry(entry.fields.gif) })

export default parseCaseStudyGif
