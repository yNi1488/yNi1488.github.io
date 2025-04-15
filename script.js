document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo-card img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function showLightbox(index) {
        currentIndex = index;
        const img = images[index];
        lightboxImg.src = img.src;
        lightboxDesc.textContent = img.getAttribute('data-desc');
        lightbox.style.display = 'block';
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        showLightbox(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showLightbox(currentIndex);
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => showLightbox(index));
    });

    closeBtn.addEventListener('click', hideLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'ArrowLeft') {
                showPrev();
            } else if (e.key === 'Escape') {
                hideLightbox();
            }
        }
    });
});
// Open popup
document.querySelectorAll('.open-popup').forEach(button => {
    button.addEventListener('click', () => {
        const popupId = button.dataset.popup;
        document.getElementById(popupId).style.display = 'flex';
    });
});

// Close popup function
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Click outside popup-content to close
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        e.target.style.display = 'none';
    }
});

// Open the Blog popup
function openPopup() {
    document.getElementById('blog-popup').style.display = 'flex'; // Show the popup
}

// Close the Blog popup
function closePopup() {
    document.getElementById('blog-popup').style.display = 'none'; // Hide the popup
}

// Close the popup when clicking outside of the content
window.onclick = function(event) {
    const popup = document.getElementById('blog-popup');
    if (event.target === popup) {
        closePopup();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const blogBtn = document.getElementById('blog-btn');
    const blogPopup = document.getElementById('blog-popup');
    const blogCloseBtn = document.querySelector('.blog-close-btn');
  
    // Open Blog popup
    blogBtn.onclick = () => {
      blogPopup.style.display = 'flex';
    };
  
    // Close popup when clicking close button
    blogCloseBtn.onclick = () => {
      blogPopup.style.display = 'none';
    };
  
    // Close popup when clicking outside popup-content
    window.onclick = (e) => {
      if (e.target === blogPopup) {
        blogPopup.style.display = 'none';
      }
    };
  });
  