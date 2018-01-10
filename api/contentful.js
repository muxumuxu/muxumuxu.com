import * as contentful from 'contentful'

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID || '919rtc7exzm8'
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || 'aeaa1358a4633dd64d06128e40a30a6932790a8f4db3d060765b1e1f2b090670'

export default contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN })
