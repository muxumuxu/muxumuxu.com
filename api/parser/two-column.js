const parseTwoColumn = entry => {
  const title = entry.fields.title
  const descriptions = entry.fields.descriptions.map(description => description.fields)
  return { title, descriptions }
}

export default parseTwoColumn
