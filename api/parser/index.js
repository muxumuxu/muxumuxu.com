import parseHead from './head'
import { default as mapping } from './parser-mapping'

const parsePage = pageEntry => {
  const head = parseHead(pageEntry.fields.head) // Pages must have at least a 'head'
  const sections = pageEntry.fields.sections.reduce((acc, curr) => {
    const id = curr.sys.contentType.sys.id
    const parser = mapping[id]
    if (parser) return [...acc, { id, ...parser(curr) }]
    if (process.env.NODE_ENV !== 'production') console.log('Unhandled component', id)
    return acc
  }, [])
  return { head, sections }
}

export { parsePage }
