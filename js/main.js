
const hamburger = document.querySelector('.nav__hamburger');
const mobileList = document.querySelector('.nav__mobile__list');

hamburger.addEventListener('click', function (e) {
  this.classList.toggle('nav__hamburger--active');
  mobileList.classList.toggle('nav__mobile__list--active');
})
