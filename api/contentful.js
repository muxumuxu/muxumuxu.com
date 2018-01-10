import * as contentful from 'contentful'

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

export default contentful.createClient({
  space: `${SPACE_ID}`,
  accessToken: `${ACCESS_TOKEN}`
})
