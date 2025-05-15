const modal = document.getElementById('preview-modal'); // modal container
const closeBtn = modal.querySelector('.close-btn');     // close button inside modal
const galleryItems = document.querySelectorAll('.img'); // all thumbnails

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const media = item.querySelector('img, video'); // get image or video
    const clone = media.cloneNode(true); // clone it for modal
    if (clone.tagName === 'VIDEO') clone.setAttribute('controls', ''); // enable controls on video

    // Clear modal and insert new media
    modal.innerHTML = '<button class="close-btn" aria-label="Close preview">✕</button>';
    modal.appendChild(clone);
    modal.classList.add('active'); // show modal
  });
});

// Close modal when close button is clicked
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-btn')) {
    modal.classList.remove('active');
    modal.innerHTML = '<button class="close-btn" aria-label="Close preview">✕</button>'; // reset modal
  }
});
