
// //---------------[Intro Section]-------------------------button controls mechanism for left/right swipe for "Intro Section"--------------------------------

const intro_carouselWrapper = document.querySelector('.intro_wrapper .intro_wrapper_container');
const intro_prevBtn = document.querySelector('.intro_prev-btn');
const intro_nextBtn = document.querySelector('.intro_next-btn');
const intro_cards = document.querySelectorAll('.intro_card_container');

let intro_currentIndex = 0;
let intro_touchStartX = 0;
let intro_touchEndX = 0;

intro_prevBtn.addEventListener('click', () => intro_moveSlide(-1));
intro_nextBtn.addEventListener('click', () => intro_moveSlide(1));

intro_carouselWrapper.addEventListener('touchstart', e => {
  intro_touchStartX = e.changedTouches[0].screenX;
});

intro_carouselWrapper.addEventListener('touchend', e => {
  intro_touchEndX = e.changedTouches[0].screenX;
  intro_handleSwipe();
});

// function intro_moveSlide(direction) {
//   const intro_cardWidth = intro_cards[0].offsetWidth; // Include margin
//   const intro_maxIndex = intro_cards.length - 1;
  
//   intro_currentIndex = Math.max(0, Math.min(intro_currentIndex + direction, intro_maxIndex));
  
//   intro_carouselWrapper.style.transform = `translateX(-${intro_currentIndex * intro_cardWidth}px)`;
// }

function intro_moveSlide(direction) {
  const intro_maxIndex = intro_cards.length - 1; // Last index (2 for 3 images)
  
  // Update the index based on direction (1 for next, -1 for previous)
  intro_currentIndex += direction;
  
  // Loop to first image if past the last image
  if (intro_currentIndex > intro_maxIndex) {
      intro_currentIndex = 0;
  }
  // Loop to last image if before the first image
  else if (intro_currentIndex < 0) {
      intro_currentIndex = intro_maxIndex;
  }
  
  // Update the carousel position
  const intro_cardWidth = intro_cards[0].offsetWidth; // Width of one card
  intro_carouselWrapper.style.transition = 'transform 0.3s ease'; // Smooth transition
  intro_carouselWrapper.style.transform = `translateX(-${intro_currentIndex * intro_cardWidth}px)`;
}

function intro_handleSwipe() {
  const intro_swipeThreshold = 50; // Minimum swipe distance in pixels
  const intro_swipeDistance = intro_touchStartX - intro_touchEndX;

  if (intro_swipeDistance > intro_swipeThreshold) {
    intro_moveSlide(1); // left-swipe
  } else if (intro_swipeDistance < -intro_swipeThreshold) {
    intro_moveSlide(-1); // right-swip
  }
}

window.addEventListener('resize', () => {
  const intro_cardWidth = intro_cards[0].offsetWidth + 30;
  intro_carouselWrapper.style.transform = `translateX(-${intro_currentIndex * intro_cardWidth}px)`;
});

setInterval(() => intro_moveSlide(1), 5000);



// //---------------[Bestsellers Section]-------------------------button controls mechanism for left/right swipe for "Intro Section"--------------------------------

const carouselWrapper = document.querySelector('.main_wrapper .wrapper_container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.card_container');

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

carouselWrapper.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

carouselWrapper.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function moveSlide(direction) {
  const cardWidth = cards[0].offsetWidth - 50;
  const maxIndex = cards.length - 1;
  
  currentIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
  
  carouselWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// function moveSlide(direction) {
//   const maxIndex = cards.length - 1;
  
//   currentIndex += direction;
  
//   if (currentIndex > maxIndex) {
//       currentIndex = 0;
//   }
//   else if (currentIndex < 0) {
//       currentIndex = maxIndex;
//   }
  
//   const cardWidth = cards[0].offsetWidth; 
//   carouselWrapper.style.transition = 'transform 0.3s ease'; 
//   carouselWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

function handleSwipe() {
  const swipeThreshold = 50;
  const swipeDistance = touchStartX - touchEndX;

  if (swipeDistance > swipeThreshold) {
    moveSlide(1); 
  } else if (swipeDistance < -swipeThreshold) {
    moveSlide(-1);
  }
}

window.addEventListener('resize', () => {
  const cardWidth = cards[0].offsetWidth + 30;
  carouselWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

// this scrolling code automatically keep scrolling
// setInterval(() => moveSlide(1), 2000); 


// this scrolling code stops the scrolling if hover the mouse of over that area
// let autoScrollInterval = setInterval(() => moveSlide(1), 15000);

// carouselWrapper.addEventListener('mouseenter', () => {
//     clearInterval(autoScrollInterval);
// });

// carouselWrapper.addEventListener('mouseleave', () => {
//     autoScrollInterval = setInterval(() => moveSlide(1), 15000);
// });


// //---------------[New Arrivals Section]-------------------------button controls mechanism for left/right swipe for "Intro Section"--------------------------------

const carouselWrapper_1 = document.querySelector('.main_wrapper_1 .wrapper_container_1');
const prevBtn_1 = document.querySelector('.prev-btn_1');
const nextBtn_1 = document.querySelector('.next-btn_1');
const cards_1 = document.querySelectorAll('.card_container_1');

let currentIndex_1 = 0;
let touchStartX_1 = 0;
let touchEndX_1 = 0;

prevBtn_1.addEventListener('click', () => moveSlide_1(-1));
nextBtn_1.addEventListener('click', () => moveSlide_1(1));

carouselWrapper_1.addEventListener('touchstart', e => {
  touchStartX_1 = e.changedTouches[0].screenX;
});

carouselWrapper_1.addEventListener('touchend', e => {
  touchEndX_1 = e.changedTouches[0].screenX;
  handleSwipe_1();
});

function moveSlide_1(direction) {
  const cardWidth_1 = cards_1[0].offsetWidth - 50;
  const maxIndex_1 = cards_1.length - 1;
  
  currentIndex_1 = Math.max(0, Math.min(currentIndex_1 + direction, maxIndex_1));
  
  carouselWrapper_1.style.transform = `translateX(-${currentIndex_1 * cardWidth_1}px)`;
}

function handleSwipe_1() {
  const swipeThreshold_1 = 50;
  const swipeDistance_1 = touchStartX_1 - touchEndX_1;

  if (swipeDistance_1 > swipeThreshold_1) {
    moveSlide_1(1); 
  } else if (swipeDistance_1 < -swipeThreshold_1) {
    moveSlide_1(-1); 
  }
}

window.addEventListener('resize', () => {
  const cardWidth_1 = cards_1[0].offsetWidth + 30;
  carouselWrapper_1.style.transform = `translateX(-${currentIndex_1 * cardWidth_1}px)`;
});

// this scrolling code automatically keep scrolling
// setInterval(() => moveSlide_1(1), 10000);


// this scrolling code stops the scrolling if hover the mouse of over that area
// let autoScrollInterval_1 = setInterval(() => moveSlide_1(1), 15000);

// carouselWrapper_1.addEventListener('mouseenter', () => {
//     clearInterval(autoScrollInterval_1);
// });

// carouselWrapper_1.addEventListener('mouseleave', () => {
//     autoScrollInterval_1 = setInterval(() => moveSlide_1(1), 15000);
// });



// //---------------[Deals Of The Week Section]--------------------button controls mechanism for left/right swipe for "Intro Section"--------------------------------

const carouselWrapper_2 = document.querySelector('.main_wrapper_dow .wrapper_container_dow');
const prevBtn_2 = document.querySelector('.prev-btn_2');
const nextBtn_2 = document.querySelector('.next-btn_2');
const cards_2 = document.querySelectorAll('.card_container_dow');

let currentIndex_2 = 0;
let touchStartX_2 = 0;
let touchEndX_2 = 0;

prevBtn_2.addEventListener('click', () => moveSlide_2(-1));
nextBtn_2.addEventListener('click', () => moveSlide_2(1));

carouselWrapper_2.addEventListener('touchstart', e => {
  touchStartX_2 = e.changedTouches[0].screenX;
});

carouselWrapper_2.addEventListener('touchend', e => {
  touchEndX_2 = e.changedTouches[0].screenX;
  handleSwipe_2();
});

function moveSlide_2(direction) {
  const cardWidth_2 = cards_2[0].offsetWidth - 50;
  const maxIndex_2 = cards_2.length - 1;
  
  currentIndex_2 = Math.max(0, Math.min(currentIndex_2 + direction, maxIndex_2));
  
  carouselWrapper_2.style.transform = `translateX(-${currentIndex_2 * cardWidth_2}px)`;
}

function handleSwipe_2() {
  const swipeThreshold_2 = 50;
  const swipeDistance_2 = touchStartX_2 - touchEndX_2;

  if (swipeDistance_2 > swipeThreshold_2) {
    moveSlide_2(1); 
  } else if (swipeDistance_2 < -swipeThreshold_2) {
    moveSlide_2(-1); 
  }
}

window.addEventListener('resize', () => {
  const cardWidth_2 = cards_2[0].offsetWidth + 30;
  carouselWrapper_2.style.transform = `translateX(-${currentIndex_2 * cardWidth_2}px)`;
});



// //---------------[Menu-SideBar-Button]----------------------------------------------------------------------------------------------------------------------------


const bar = document.querySelector('.menu_btn_res');
const nav = document.querySelector('.category_header_container');
const closeBtn = document.querySelector('.close-menu');

if (bar) {
  bar.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.add('active');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('active');
  });
}

// //---------------[Footer_Drop-Down-Menu]--------------------------------------------------------------------------------------------------------------------------

document.querySelectorAll('.header_wrapper_res').forEach(header => {
  header.addEventListener('click', () => {
      const options = header.nextElementSibling;
      const arrow = header.querySelector('.arrow');
      
      if (options.classList.contains('show')) {
          options.classList.remove('show');
          arrow.textContent = 'arrow_drop_down';
      } else {
          options.classList.add('show');
          arrow.textContent = 'arrow_drop_up';
      }
  });
});