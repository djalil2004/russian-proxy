const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav__link')
const navLinkText = document.querySelectorAll('.nav__link-text')
const navItem = document.querySelectorAll('.nav__item')
const additionalText = document.querySelectorAll('.additional-text')


const pointingToMenu = (event) => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
    additionalText.forEach(item => item.classList.toggle('active'));
}

menuBtn.addEventListener('click', pointingToMenu);

navItem.forEach((item, index) => {
    let timer;
    item.addEventListener('mouseover', () => {
        if (index !== 0) {
            navItem[index].classList.add('show');
            clearTimeout(timer);
            timer = setTimeout(() => {
                navItem[index].classList.add('item-pos');
            }, 600);
        }
    });
    item.addEventListener('mouseout', () => {
        if (index !== 0) {
            navItem[index].classList.remove('show');
            clearTimeout(timer);
            timer = setTimeout(() => {
                navItem[index].classList.remove('item-pos');
            }, 0);
        }
    });
})

