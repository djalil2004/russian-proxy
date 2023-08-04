const account = document.querySelector('.account')
const accountBlock = document.querySelector('.account-block')
const btnFirst = document.querySelector('.btn-first')
const btnSecond = document.querySelector('.btn-second')
const checkbox = document.querySelectorAll('.checkbox')

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

