const crossButton = document.querySelector('.cross-button')
const burgerButton = document.querySelector('.burger')
const menu = document.querySelector('.navigation')
const menuLink = document.querySelectorAll('.nav-link')

burgerButton.addEventListener('click', () => {
    menu.classList.add('visible');
    crossButton.classList.add('visible')
});

crossButton.addEventListener('click', () => {
    menu.classList.remove('visible');
    crossButton.classList.remove('visible')
});

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('visible');
        crossButton.classList.remove('visible')
    });
});