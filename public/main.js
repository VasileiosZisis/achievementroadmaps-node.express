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

let slides = document.querySelectorAll(".CarouselIMG");

window.addEventListener('load', function (){
  showSlides();
});

let carouselItem = 0;
function showSlides() {   
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

function handleTabletChange(e) {
  if (e.matches) {
    for (let i = 0; i < links.length; i++) {
      links[i].style.display = "flex";
    }
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

// ACTIVE CLASS
(function () {
  const current = location.pathname.split('/')[1];
  const home = document.querySelector('#home');
  if (current === "") return; 
      
  const menuItems = document.querySelectorAll('.navbarSection a');
  for (let i = 0, len = menuItems.length; i < len; i++) {
    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].className += " current";
          home.classList.remove('current');
      }
  }
  const footerItems = document.querySelectorAll('.footerSection a');
  for (let i = 0, len = footerItems.length; i < len; i++) {
    if (footerItems[i].getAttribute("href").indexOf(current) !== -1) {
      footerItems[i].className += " current";
      home.classList.remove('current');
    }
}
})();