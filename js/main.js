// анимация мобильного меню
const navBtn = document.querySelector('.mobile-nav-button');
const navMenu = document.querySelector('.mobile-nav-wrp');

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-nav-show');
    document.body.classList.toggle('no-scrol');
});


// анимация popup окна
const popupActiveBtn = document.querySelectorAll('.shop-card__button');
const popupWindow = document.querySelector('.popup-background');
const popupCloseWindowBtn = document.querySelector('.popup-close');

for (const item of popupActiveBtn) {
    item.addEventListener('click', () => {
        popupWindow.classList.toggle('popup-active')
    });
}

popupCloseWindowBtn.addEventListener('click', () => {
    popupWindow.classList.toggle('popup-active')
});