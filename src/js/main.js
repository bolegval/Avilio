import './vendor/focus-visible.min.js';

const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu__list'),
      signin_button = document.querySelector('.header__signin--mobile'),
      signin = document.querySelector('.header__btn');

burger.addEventListener('click', () => {
  if (!burger.classList.contains('burger--active')) {
    burger.classList.add('burger--active');
    menu.classList.add('menu__list--vissible');
  } else {
    burger.classList.remove('burger--active');
    menu.classList.remove('menu__list--vissible');
  }
});

signin_button.addEventListener('click', () => {
  if (!signin.classList.contains('header__btn--open')) {
    signin.classList.add('header__btn--open');
  } else {
    signin.classList.remove('header__btn--open');
  }
});
