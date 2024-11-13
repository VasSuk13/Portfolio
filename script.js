const crossButton = document.querySelector('.cross-button')
const burgerButton = document.querySelector('.burger')
const menu = document.querySelector('.navigation')

burgerButton.addEventListener('click', () => {
    menu.classList.add('visible');
    crossButton.classList.add('visible')
});

crossButton.addEventListener('click', () => {
    menu.classList.remove('visible');
    crossButton.classList.remove('visible')
});