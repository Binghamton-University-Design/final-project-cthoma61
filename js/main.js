/* javascript */

$(document).ready(function() {

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const outside = document.querySelector('.outsidenav');


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  outside.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 820 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
    outside.classList.remove('active');
  }
};


navLogo.addEventListener('click', hideMobileMenu);
outside.addEventListener('click', hideMobileMenu);




// Show button when scrolling down
const arrowUp = $('#arrowup');

$(window).on('scroll', () => {
  if ($(window).scrollTop() > 500) {
    arrowUp.show();
  } else {
    arrowUp.hide();
  }
});


// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
        $(window).scrollTop(0);
        }


arrowUp.on('click', scrollToTop)
});