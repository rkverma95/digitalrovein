const popBox = document.getElementById('popBox');
const popImage = document.getElementById('popImage');
const titleElement = document.getElementById('title');
const captionElement = document.getElementById('caption');

let currentIndex = 0;

const images = [
  { src: 'img/img1.jpg', title: 'Title 1', caption: 'Caption 1' },
  { src: 'img/img2.jpg', title: 'Title 2', caption: 'Caption 2' },
  { src: 'img/img3.jpg', title: 'Title 3', caption: 'Caption 3' },
  { src: 'img/img4.jpg', title: 'Title 4', caption: 'Caption 4' },

  // Add more images as needed
];

function showImage(index) {
  const image = images[index];
  popImage.src = image.src;
  titleElement.textContent = image.title;
  captionElement.textContent = image.caption;
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function openBox() {
  popBox.style.display = 'block';
}
function closeBox() {
  popBox.style.display = 'none';
}

function zoom(percent) {
  const currentZoom = getComputedStyle(popImage).getPropertyValue('transform');
  popImage.style.transform = `scale(${getScaleFactor(currentZoom, percent)})`;
}

function getScaleFactor(transform, percent) {
  const currentScale = parseFloat(transform.match(/(-?\d+(\.\d+)?)/)[0]);
  const newScale = currentScale + percent / 100;
  return newScale;
}

// Initial setup
showImage(currentIndex);
