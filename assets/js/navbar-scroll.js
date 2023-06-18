const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 56) {
        navEl.classList.add('navbar-scroll');
    } else {
        navEl.classList.remove('navbar-scroll');
    }
});