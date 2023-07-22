// Get the image and box elements
const image = document.querySelector('.image');
const box = document.querySelector('.box');

// Add a click event listener to the image
image.addEventListener('click', function() {
  // Toggle the 'active' class on the box
  box.classList.toggle('active');
});
