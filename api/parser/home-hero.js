import { parseImageEntry } from './utils'

const parseHomeHero = entry => {
  const { title, videoCta } = entry.fields
  const illustration = parseImageEntry(entry.fields.illustration)
  const icon = parseImageEntry(entry.fields.videoCtaIcon)

  return {
    title,
    videoCta,
    illustration,
    icon
  }
}

export default parseHomeHero
