const config = {
  // If the image gets within 50px in the Y axis, start the download.
  rootMargin: '50px 0px',
  threshold: 0.01,
}

// The observer for the images on the page
let observer = new IntersectionObserver(onIntersection, config)
images.forEach(image => {
  observer.observe(image)
})

function onIntersection(entries) {
  // Loop through the entries
  entries.forEach(entry => {
    // Are we in viewport?
    if (entry.intersectionRatio > 0) {
      // Stop watching and load the image
      observer.unobserve(entry.target)
      preloadImage(entry.target)
    }
  })
}
