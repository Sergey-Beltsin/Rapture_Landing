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
            document.querySelectorAll('.main-nav__item').forEach(item => {
                item.style.opacity = '1';
            });
        } else {
            nav.classList.remove('main-nav--active');
            document.querySelector('body').style.overflow = 'auto';
            navList.forEach(item => {
                item.style.visibility = 'hidden';
            });
            document.querySelectorAll('.main-nav__item').forEach(item => {
                item.style.opacity = '0';
            });
        }
    });

    if (window.innerWidth > 768) {
        document.querySelectorAll('.main-nav__item').forEach(item => {
            item.style.opacity = '1';
        });
    } else {
        document.querySelectorAll('.main-nav__item').forEach(item => {
            item.style.opacity = '0';
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navList.forEach(item => {
                item.style.visibility = 'visible';
            });
            nav.classList.remove('main-nav--active');
            document.querySelector('body').style.overflow = 'auto';
            document.querySelectorAll('.main-nav__item').forEach(item => {
                item.style.opacity = '1';
            });
        } else {
            navList.forEach(item => {
                item.style.visibility = 'hidden';
            });
            document.querySelectorAll('.main-nav__item').forEach(item => {
                item.style.opacity = '0';
            });
        }
    })
})();