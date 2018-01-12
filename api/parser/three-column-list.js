const parseThreeColumnList = entry => {
  const title = entry.fields.title
  const lists = entry.fields.lists.map(list => list.fields)
  return { title, lists }
}

export default parseThreeColumnList
