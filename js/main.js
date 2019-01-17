
const hamburger = document.querySelector('.nav__hamburger');
const mobileList = document.querySelector('.nav__mobile__list');

const carouselLeftBtn = document.querySelector('.team__navigation__arrow-left');
const carouselRightBtn = document.querySelector('.team__navigation__arrow-right');

const firstSliderItem = document.querySelector('.team__item--1');
const secondSliderItem = document.querySelector('.team__item--2');
const thirdSliderItem = document.querySelector('.team__item--3');

const sliderItems = document.querySelector('.team__carousel').children;

hamburger.addEventListener('click', function (e) {
  this.classList.toggle('nav__hamburger--active');
  mobileList.classList.toggle('nav__mobile__list--active');
})

function switchClassesLeft() {
  for (let i = 0; i < sliderItems.length; i++) {
    switch (true) {
      case sliderItems[i].classList.contains('team__item--center'): {
        sliderItems[i].classList = `team__item ${'team__item--left'}`;
      } break;
      case sliderItems[i].classList.contains('team__item--left'): {
        sliderItems[i].classList = `team__item ${'team__item--hidden'}`;
      } break;
      case sliderItems[i].classList.contains('team__item--hidden'): {
        sliderItems[i].classList = `team__item ${'team__item--right'}`;
      } break;
      case sliderItems[i].classList.contains('team__item--right'): {
        sliderItems[i].classList = `team__item ${'team__item--center'}`;
      } break;
    }
  }
}

function switchClassesRight() {
  for (let i = 0; i < sliderItems.length; i++) {
    switch (true) {
      case sliderItems[i].classList.contains('team__item--center'): {
        sliderItems[i].classList = `team__item ${'team__item--right'}`;
      } break;
      case sliderItems[i].classList.contains('team__item--right'): {
        sliderItems[i].classList = `team__item ${'team__item--hidden'}`;
      } break;
      case sliderItems[i].classList.contains('team__item--hidden'): {
        sliderItems[i].classList = `team__item ${'team__item--left'}`;
      } break;
      case sliderItems[i].classList.contains('team__item--left'): {
        sliderItems[i].classList = `team__item ${'team__item--center'}`;
      } break;
    }
  }
}

carouselRightBtn.addEventListener('click', e => {
  switchClassesLeft();
});

carouselLeftBtn.addEventListener('click', e => {
  switchClassesRight();
});