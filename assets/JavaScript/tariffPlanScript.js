const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav__link')
const navLinkText = document.querySelectorAll('.nav__link-text')
const navItem = document.querySelectorAll('.nav__item')
const additionalText = document.querySelectorAll('.additional-text')
const account = document.querySelector('.account')
const accountBlock = document.querySelector('.account-block')
const btnFirst = document.querySelector('.btn-first')
const btnSecond = document.querySelector('.btn-second')
const checkbox = document.querySelectorAll('.checkbox')


const pointingToMenu = (event) => {
    nav.classList.toggle('active');
    menuBtn[0].classList.toggle('active');
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

account.addEventListener('click', () => {
    accountBlock.classList.toggle('active');
});

btnSecond.addEventListener('click', () => {
    btnSecond.classList.add('button--green');
    btnFirst.classList.add('button--transparent', 'channels__button-color');
    btnFirst.classList.remove('button--black');
})
btnFirst.addEventListener('click', () => {
    btnFirst.classList.add('button--black');
    btnSecond.classList.add('button--transparent', 'channels__button-color');
    btnSecond.classList.remove('button--green');
})

checkbox.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
})

