// JavaScript Document
var slides = document.querySelectorAll('.slide');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

prev.addEventListener('click', function() {
  showSlide(currentSlide - 1);
});

next.addEventListener('click', function() {
  showSlide(currentSlide + 1);
});

