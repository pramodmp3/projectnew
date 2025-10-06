const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero-img");
const images = document.querySelectorAll(".hero-img img");

let index = 0;
const imageWidth = window.innerWidth; // full screen width

function showNextImage() {
  index++;
  if (index >= images.length) {
    index = 0; // restart from first image
  }
  hero.scrollTo({
    left: index * imageWidth,
    behavior: "smooth",
  });
}

// Auto scroll every 3 seconds
setInterval(showNextImage, 3000);
