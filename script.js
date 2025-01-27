let rating = 0;
const stars = document.querySelectorAll('.star');
const ratingValueElement = document.getElementById('ratingValue');

// Update rating on star click
stars.forEach(star => {
  star.addEventListener('click', () => {
    rating = star.getAttribute('data-value');
    updateStars();
  });

  // Highlight stars on hover
  star.addEventListener('mouseover', () => {
    const value = star.getAttribute('data-value');
    highlightStars(value);
  });

  // Reset stars after hover
  star.addEventListener('mouseout', () => {
    highlightStars(rating);
  });
});

function highlightStars(value) {
  stars.forEach(star => {
    if (star.getAttribute('data-value') <= value) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

function updateStars() {
  ratingValueElement.textContent = rating;
  highlightStars(rating);
}

function submitRating() {
  if (rating === 0) {
    alert('Please select a rating before submitting.');
  } else {
    alert(`Thank you for rating the Ferval Party! You rated it ${rating} stars.`);
  }
}
