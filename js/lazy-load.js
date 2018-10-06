const portfolio = document.querySelector('.photo-gallery')
function loadImage(image) {
  const src = image.dataset.src
  image.src = src
}

;(async () => {
  const res = await fetch(
    'https://res.cloudinary.com/infonuagique/image/list/portfolio.json'
  )
  const { resources: images } = await res.json()

  const innerHTMLImages = images
    .map(({ public_id, width, format, height }) => {
      return ` <div class="portfolio-photo ${
        width > height ? 'landscape' : 'portrait'
      }">
        <img src="https://res.cloudinary.com/infonuagique/image/upload/c_scale,h_3,w_5/${public_id}.${format}"
          data-src="https://res.cloudinary.com/infonuagique/image/upload/c_scale,h_450/${public_id}"
          alt="${public_id}" class="js-lazy-image">
      </div>`
    })
    .join('')

  portfolio.innerHTML = innerHTMLImages

  // Get all of the images that are marked up to lazy load
  const imagesLazy = document.querySelectorAll('.js-lazy-image')

  const config = {
    // If the image gets within 50px in the Y axis, start the download.
    rootMargin: '50px 0px',
    threshold: 0.01,
  }

  // The observer for the images on the page
  let observer = new IntersectionObserver(onIntersection, config)
  imagesLazy.forEach(image => {
    observer.observe(image)
  })

  function onIntersection(entries) {
    // Loop through the entries
    entries.forEach(entry => {
      // Are we in viewport?
      if (entry.intersectionRatio > 0) {
        // Stop watching and load the image
        observer.unobserve(entry.target)
        loadImage(entry.target)
      }
    })
  }
})()
