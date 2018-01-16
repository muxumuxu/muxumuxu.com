const parseJobList = entry => {
  const title = entry.fields.title
  const jobs = entry.fields.jobs.map(job => job.fields)
  return { title, jobs }
}

export default parseJobList
