// TEXT CHANGE (already working)
let changeValue = document.getElementById("changeit");

setTimeout(() => {
  changeValue.style.opacity = "0";
  setTimeout(() => {
    changeValue.innerText = "Lavish!";
    changeValue.style.opacity = "1";
  }, 1000);
}, 2000);

// script to change automatically
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;
let interval;

// show slide function
function showSlide(i) {
  slides[index].pause();
  slides[index].currentTime = 0;
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");

  index = i;

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  slides[index].play();
}

// autoplay
function startSlider() {
  interval = setInterval(() => {
    let nextIndex = (index + 1) % slides.length;
    showSlide(nextIndex);
  }, 5000);
}

// dot click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    clearInterval(interval);
    showSlide(i);
    startSlider();
  });
});

// start first slide
slides[index].play();
startSlider();
