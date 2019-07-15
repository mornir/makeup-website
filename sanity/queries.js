const getPhotos = `*[_type == "photo"] {
  "palette": photo.asset->{
    url,
    metadata {
      location,
      palette {
        dominant {
          background,
          foreground
        }
      }
    }
  }
}`

export default { getPhotos }
