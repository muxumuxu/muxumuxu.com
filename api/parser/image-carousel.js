import { parseImageEntry } from './utils'

const parseImageCarousel = entry => ({ image: parseImageEntry(entry.fields.image) })

export default parseImageCarousel
