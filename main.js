function toggleNav() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.getElementById("myNav");

  hamburger.classList.toggle("active");
  hamburger.classList.toggle("black"); // toggle the black class along with the active class

  if (nav.style.height === "100%") {
    closeNav();
  } else {
    nav.style.height = "100%";
  }

  const links = document.querySelectorAll(".overlay a");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      closeNav();
    });
  });

  function closeNav() {
    nav.style.height = "0%";
    hamburger.classList.remove("active");
    hamburger.classList.remove("black");
  }
}




// Smooth 
// Get all page-relative links
const links = document.querySelectorAll('a[href^="#"]');

// Attach click event listener to each link
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the target section ID from the link's href attribute
    const targetId = link.getAttribute('href').slice(1);

    // Find the target section by ID
    const targetSection = document.getElementById(targetId);

    // Calculate the scroll position to the target section
    const offsetTop = targetSection.offsetTop;

    // Perform smooth scrolling animation
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});


// Cusor
const cursor = document.getElementById("cursor");
let isScrolling = false;
let timeout;

function updateCursorPosition(e) {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.left = (x - 12) + "px";
  cursor.style.top = (y - 12) + "px";
}

function resetCursor() {
  cursor.style.display = "none";
  isScrolling = true;
}

document.addEventListener("mousemove", function (e) {
  clearTimeout(timeout);
  updateCursorPosition(e);
  cursor.style.display = "block";
  isScrolling = false;
  timeout = setTimeout(resetCursor, 1000); // Adjust the delay as needed
});

document.addEventListener("scroll", function () {
  if (!isScrolling) {
    cursor.style.display = "none";
    isScrolling = true;
  }
});

const serviceListItems = document.querySelectorAll("#services li, a, button");
serviceListItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    cursor.style.transform = "scale(2)";
  });
  item.addEventListener("mouseout", function () {
    cursor.style.transform = "scale(1)";
  });
});



/*
const cursor = document.querySelector("#cursor");
const cursorCircle = cursor.querySelector(".cursor__circle");

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  
};

window.addEventListener("mousemove", updateCoordinates);

const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);

  pos.x += diffX * speed;
  pos.y += diffY * speed;

  const angle = (Math.atan2(diffY, diffX) * 180) / Math.PI;
  const squeeze = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) / 1500;

  const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
  const rotate = `rotate(${angle}deg)`;
  const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

  cursor.style.transform = translate;
  cursorCircle.style.transform = `${rotate} ${scale}`;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
*/


// Testimonials 

const items = document.querySelectorAll('.item');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

let activeItem = 0;

function showItem(index) {
  items[activeItem].classList.remove('active');
  activeItem = index;
  items[activeItem].classList.add('active');
}

previousButton.addEventListener('click', () => {
  let index = activeItem - 1;
  if (index < 0) {
    index = items.length - 1;
  }
  showItem(index);
});

nextButton.addEventListener('click', () => {
  let index = activeItem + 1;
  if (index >= items.length) {
    index = 0;
  }
  showItem(index);
});

showItem(activeItem);


// Reveal Scrolling

// Function to check if an element is partially in the viewport
function isElementPartiallyInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;

  var verticalInView = rect.top <= windowHeight && rect.bottom >= 0;
  var horizontalInView = rect.left <= windowWidth && rect.right >= 0;

  return verticalInView && horizontalInView;
}

// Function to handle scroll events
function handleScroll() {
  var fadeUpElements = document.querySelectorAll('.fade-up');
  var rightDivs = document.querySelectorAll('.right-visible');

  fadeUpElements.forEach(function (element) {
    if (isElementPartiallyInViewport(element)) {
      element.classList.add('visible');
    }
  });

  rightDivs.forEach(function (rightDiv) {
    if (isElementPartiallyInViewport(rightDiv)) {
      rightDiv.classList.add('visible');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

