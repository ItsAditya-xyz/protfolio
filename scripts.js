function toggleMenu() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");
}

var slidePosition = 1;
SlideShow(slidePosition);

// Forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

// Image controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(function() { plusSlides(1); }, 3000);
}
var autoSlideInterval = setInterval(function() { plusSlides(1); }, 3000);
