(function() {
    let button = document.querySelector('.main-nav__toggle');
    let nav = document.querySelector('.main-nav');
    let navList = document.querySelectorAll('.main-nav__list');
    let siteNav = document.querySelectorAll('.site-list__item');
    let userNav = document.querySelectorAll('.user-list__item');

    button.addEventListener('click', function() {
        if (!nav.classList.contains('main-nav--active')) {
            nav.classList.add('main-nav--active');
            document.querySelector('body').style.overflow = 'hidden';
            navList.forEach(item => {
                item.style.visibility = 'visible';
            });
        } else {
            nav.classList.remove('main-nav--active');
            document.querySelector('body').style.overflow = 'auto';
            navList.forEach(item => {
                item.style.visibility = 'hidden';
            });
        }
    });
})();