function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = "flex"
}

function hidesidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = "none"
}


// Scrolling slider
let currentIndex = 0;

function changeSlide(direction) {
  currentIndex += direction;
  updateSlider();
}

function updateSlider() {
  const slider = document.querySelector('.slides-container');
  const slideWidth = 366.66;
  const newPosition = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${newPosition}px)`;

  // Wrap around logic
  const totalSlides = document.querySelectorAll('.slides').length / 2; // Considering duplicates
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
}

// Auto-scrolling with a delay of 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);


// let list = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
// let active = 0;
// let lengthItem = items.length -1;

// next.onclick = function(){
// 	if(active + 1 > lengthItem){
// 		active = 0;
// 	}else{
// 		active = active + 1;
// 	}
// 	reloadSlider();
// }

// function reloadSlider(){
// 	let checkleft = items[active].offsetLeft;
// 	list.style.left = -checkleft + 'px';
// 	// let checkright = items[active].offsetRight;
// 	// list.style.right = -checkright + 'px';
	
// }

let currentSlide = 0;

function showSlide(index) {
	const slider = document.querySelector('.slider');
	const totalSlides = document.querySelectorAll('.slide').length;

	if (index >= totalSlides) {
		currentSlide = 0;
	} else if (index < 0) {
		currentSlide = totalSlides - 1;
	} else {
		currentSlide = index;
	}

	const translateValue = -currentSlide * 100 + '%';
	slider.style.transform = `translateX(${translateValue})`;
}

function prevSlide() {
	showSlide(currentSlide - 1);
}

function nextSlide() {
	showSlide(currentSlide + 1);
}


// open pop box
const popBox = document.getElementById('popBox');

function openBox() {
  popBox.style.display = 'block';
}