export default function (context) {
  if (process.client) { return }
  return Promise.all([
    context.store.dispatch('fetchPages')
  ])
}
