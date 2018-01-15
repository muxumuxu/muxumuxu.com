const parseTwoColumnList = entry => {
  console.log(entry.fields.list)
  const title = entry.fields.title
  const description = {
    title: entry.fields.description.fields.title,
    description: entry.fields.description.fields.description
  }
  const list = {
    title: entry.fields.list.fields.title,
    items: entry.fields.list.fields.items
  }
  return { title, description, list }
}

export default parseTwoColumnList
