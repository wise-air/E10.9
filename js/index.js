const burgerMenuBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-navbar-menu');

burgerMenuBtn.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})