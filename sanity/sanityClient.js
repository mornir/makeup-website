import sanityClient from 'picosanity'

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: '268fhabe',
  dataset: 'production',
  useCdn: false,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
})
