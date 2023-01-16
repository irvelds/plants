console.log(
    '1. Вёрстка соответствует макету. Ширина экрана 768px +24\n' +
    '    - блок <header> +2\n' +
    '    - секция welcome +3\n' +
    '    - секция about +4\n' +
    '    - секция service +4\n' +
    '    - секция prices +4\n' +
    '    - секция contacts +4\n' +
    '    - блок <footer> +3\n' +
    '2. Вёрстка соответствует макету. Ширина экрана 380px +24\n' +
    '    - блок <header> +2\n' +
    '    - секция welcome +3\n' +
    '    - секция about +4\n' +
    '    - секция service +4\n' +
    '    - секция prices +4\n' +
    '    - секция contacts +4\n' +
    '    - блок <footer> +3\n' +
    '3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n' +
    '    - нет полосы прокрутки при ширине страницы от 1440рх до 380px +7\n' +
    '    - нет полосы прокрутки при ширине страницы от 380px до 320рх +8\n' +
    '4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22\n' +
    '    - при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2\n' +
    '    - при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n' +
    '    - адаптивное меню соответствует цветовой схеме макета +4\n' +
    '    - при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n' +
    '    - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4\n' +
    '    - при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n' +
    ' Оценка за задание: 75 баллов'
)


/* Menu Button Scripts */
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu-item');

function toggleMenu() {
  if (getComputedStyle(menuButton).display === 'block') {
        menuButton.classList.toggle("open");
        menu.classList.toggle('active');
        overlay.classList.toggle('show');
        body.classList.toggle('hidden');
    }
}

menuButton.addEventListener('click', toggleMenu);
[...menuItems].forEach((item) => {
    item.addEventListener('click', toggleMenu);
})

document.addEventListener('click', (e) => {
    const overlayPath = e.composedPath().includes(overlay);
    if (overlayPath) {
        toggleMenu()
    }
})