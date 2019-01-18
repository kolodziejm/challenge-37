
const hamburger = document.querySelector('.nav__hamburger');
const mobileList = document.querySelector('.nav__mobile__list');

const carouselLeftBtn = document.querySelector('.team__navigation__arrow-left');
const carouselRightBtn = document.querySelector('.team__navigation__arrow-right');

const carouselItems = document.querySelector('.team__carousel').children;

function switchClassesLeft() {
  for (let i = 0; i < carouselItems.length; i++) {
    switch (true) {
      case carouselItems[i].classList.contains('team__item--center'): {
        carouselItems[i].classList = `team__item team__item--left`;
      } break;
      case carouselItems[i].classList.contains('team__item--left'): {
        carouselItems[i].classList = `team__item team__item--hidden`;
      } break;
      case carouselItems[i].classList.contains('team__item--hidden'): {
        carouselItems[i].classList = `team__item team__item--right`;
      } break;
      case carouselItems[i].classList.contains('team__item--right'): {
        carouselItems[i].classList = `team__item team__item--center`;
      } break;
    }
  }
}

function switchClassesRight() {
  for (let i = 0; i < carouselItems.length; i++) {
    switch (true) {
      case carouselItems[i].classList.contains('team__item--center'): {
        carouselItems[i].classList = `team__item team__item--right`;
      } break;
      case carouselItems[i].classList.contains('team__item--right'): {
        carouselItems[i].classList = `team__item team__item--hidden`;
      } break;
      case carouselItems[i].classList.contains('team__item--hidden'): {
        carouselItems[i].classList = `team__item team__item--left`;
      } break;
      case carouselItems[i].classList.contains('team__item--left'): {
        carouselItems[i].classList = `team__item team__item--center`;
      } break;
    }
  }
}

hamburger.addEventListener('click', function (e) {
  this.classList.toggle('nav__hamburger--active');
  mobileList.classList.toggle('nav__mobile__list--active');
})

carouselRightBtn.addEventListener('click', e => switchClassesLeft());

carouselLeftBtn.addEventListener('click', e => switchClassesRight());