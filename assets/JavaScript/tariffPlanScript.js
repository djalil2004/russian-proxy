const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')

const pointingToMenu = (event) => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

menuBtn.addEventListener('click', pointingToMenu);
