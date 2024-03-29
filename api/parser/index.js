import parseHead from './head'
import { default as componentsMapping } from '../components-mapping'

const parsePage = pageEntry => {
  const head = parseHead(pageEntry.fields.head) // Pages must have at least a 'head'
  const sections = pageEntry.fields.sections.reduce((acc, curr) => {
    const id = curr.sys.contentType.sys.id
    const componentMatched = componentsMapping.find(mapping => mapping.contentfulId === id)
    if (componentMatched) return [...acc, { id, ...componentMatched.parser(curr) }]
    if (process.env.NODE_ENV !== 'production') console.log('Unhandled component', id)
    return acc
  }, [])
  return { head, sections }
}

export { parsePage }
