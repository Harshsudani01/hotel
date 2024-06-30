function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Open lightbox
  function openLightbox(imageSrc) {
    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    const lightboxImage = document.querySelector('.lightbox-content img');

    lightboxImage.src = imageSrc;
    lightboxOverlay.style.display = 'flex';
  }

  // Close lightbox
  function closeLightbox() {
    document.querySelector('.lightbox-overlay').style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const category = this.dataset.category;
        filterGallery(category);
      });
    });

    // Lightbox close button
    document.querySelector('.close-btn').addEventListener('click', closeLightbox);

    // Lightbox close on overlay click
    document.querySelector('.lightbox-overlay').addEventListener('click', function(event) {
      if (event.target === this) {
        closeLightbox();
      }
    });

    // Lightbox on gallery item click
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', function() {
        const imageUrl = this.querySelector('img').src;
        openLightbox(imageUrl);
      });
    });
  });