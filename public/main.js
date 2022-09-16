const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const dropDownCont = document.querySelector('.dropdown-content');

hamburger.addEventListener('click', menu);

function menu() {
  if (!hamburger.classList.contains('active')) {
    hamburger.classList.add('active');
    navMenu.classList.add('active');
    dropDownCont.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('stop-scrolling');
  } else if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    dropDownCont.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('stop-scrolling');
  }
}

// ACTIVE CLASS

(function () {
  const current = location.pathname.split('/')[1];
  const home = document.querySelector('#home');
  if (current === '') return;

  const menuItems = document.querySelectorAll('.nav-link');
  for (let i = 0, len = menuItems.length; i < len; i++) {
    if (menuItems[i].getAttribute('href').indexOf(current) !== -1) {
      menuItems[i].className += ' current-page';
      home.classList.remove('current-page');
    }
  }
  const footerItems = document.querySelectorAll('.footerSection a');
  for (let i = 0, len = footerItems.length; i < len; i++) {
    if (footerItems[i].getAttribute('href').indexOf(current) !== -1) {
      footerItems[i].className += ' current';
      home.classList.remove('current');
    }
  }
})();

// TOOLTIP

const parents = document.querySelectorAll('.achievement');

for (let i = 0; i < parents.length; i++) {
  parents[i].addEventListener('mousemove', (e) => {
    const rect = parents[i].getBoundingClientRect();
    const tooltip = e.target.querySelector(':scope > .tooltip-content');

    if (tooltip) {
      const rectTo = tooltip.getBoundingClientRect();

      if (rectTo.right > document.body.offsetWidth) {
        tooltip.style.left =
          document.body.offsetWidth - rectTo.right - 10 + 'px';
      }
    }
  });
}

// TOGGLEABLE DIV

const buttonAch = document.querySelector('.achievement-button');
const listAch = document.querySelector('.achievement-ul');

if (buttonAch) {
  buttonAch.addEventListener('click', function onClick() {
    const listAchDisplay = getComputedStyle(listAch);
    if (listAchDisplay.display === 'none') {
      listAch.style.display = 'block';
    } else {
      listAch.style.display = 'none';
    }
  });
}
