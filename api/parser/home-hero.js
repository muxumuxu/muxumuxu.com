import { parseImageEntry } from './utils'

const parseHomeHero = entry => {
  const { title, videoCta, videoUrl } = entry.fields
  const illustration = parseImageEntry(entry.fields.illustration)
  const icon = parseImageEntry(entry.fields.videoCtaIcon)

  return {
    title,
    videoCta,
    videoUrl,
    illustration,
    icon
  }
}

export default parseHomeHero
