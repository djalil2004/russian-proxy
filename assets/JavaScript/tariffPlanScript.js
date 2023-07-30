const nav = document.querySelector('.nav')

const pointingToNavigation = (event) => {
    nav.classList.toggle('active');
}

nav.addEventListener('mouseenter', pointingToNavigation);
nav.addEventListener('mouseleave', pointingToNavigation);
