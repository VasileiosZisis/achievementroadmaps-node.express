const hamMenu = document.querySelector(".hamMenu");
const links = document.querySelectorAll(".navbarSection li");
const mediaQuery = window.matchMedia('(min-device-width: 600px)');

hamMenu.addEventListener("click", function onClick() {
  for (let i = 0; i < links.length; i++) {
    if(links[i].style.display === "none") {
      links[i].style.display = "flex";
    }
    else {
      links[i].style.display = "none";
    }
  }  
})

window.addEventListener('load', function (){
  showSlides();
});

let carouselItem = 0;
function showSlides() {
  let slides = document.getElementsByClassName("CarouselIMG");
  
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
    carouselItem++;
    if (carouselItem > slides.length) {
    carouselItem = 1
    }
  slides[carouselItem-1].style.display = "block";
  setTimeout(showSlides, 3500);  
}
// showSlides();

function handleTabletChange(e) {
  if (e.matches) {
    for (let i = 0; i < links.length; i++) {
      links[i].style.display = "flex";
    }
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

