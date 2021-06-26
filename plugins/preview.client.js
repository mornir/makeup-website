export default ({ query, enablePreview }) => {
  if (query.preview) {
    enablePreview()
  }
}
