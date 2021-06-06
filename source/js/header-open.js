var header = document.querySelector('.header');
var headerMenu = document.querySelector('.header__button');
var headerLinks = document.querySelectorAll('.header-menu__link');

header.classList.remove('header--nojs');
header.classList.remove('header--opened');

headerMenu.addEventListener('click', (evt) => {
  evt.preventDefault();
  header.classList.toggle('header--opened');
});

headerLinks.forEach(link => link.addEventListener('click', () => {
  header.classList.toggle('header--opened');
}))
