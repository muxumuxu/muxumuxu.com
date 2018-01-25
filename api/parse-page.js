import parseHead from './parser/head'
import { default as componentsMapping } from './components-mapping'

export default (pageEntry) => {
  const head = parseHead(pageEntry.fields.head) // Pages must have at least a 'head'
  const sectionsToParse = pageEntry.fields.sections || []
  const sections = sectionsToParse.reduce((acc, curr) => {
    if (!curr || !curr.sys || !curr.sys.contentType || !curr.sys.contentType.sys) return acc
    const id = curr.sys.contentType.sys.id
    const componentMatched = componentsMapping.find(mapping => mapping.contentfulId === id)
    if (componentMatched) return [...acc, { id, ...componentMatched.parser(curr) }]
    if (process.env.NODE_ENV !== 'production') console.log('Unhandled component', id)
    return acc
  }, [])
  return { head, sections }
}
