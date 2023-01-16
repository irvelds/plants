console.log(
    '1. Верстка валидная +10\n' +
    '2. Верстка семантическая +20\n' +
    ' В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):\n' +
    '    - <header>, <main>, <footer> +3\n' +
    '    - пять элементов <section> (по количеству секций) +3\n' +
    '    - только один заголовок <h1> +3\n' +
    '    - четыре заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3\n' +
    '    - один элемент <nav> (панель навигации) +3\n' +
    '    - два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n' +
    '    - пять кнопок <button> +2\n' +
    '3. Верстка соответствует макету +48\n' +
    '    - блок <header> +6\n' +
    '    - секция welcome +7\n' +
    '    - секция about +7\n' +
    '    - секция service +7\n' +
    '    - секция prices +7\n' +
    '    - секция contacts +7\n' +
    '    - блок <footer> +7\n' +
    '4. Требования к css выполнены +12\n' +
    '    - для построения сетки используются флексы или гриды +2\n' +
    '    - при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n' +
    '    - фоновый цвет тянется на всю ширину страницы +2\n' +
    '    - иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n' +
    '    - изображения добавлены в формате .jpg или .png +2\n' +
    '    - есть favicon +2\n' +
    '5. Интерактивность реализуется через css +20\n' +
    '    - плавная прокрутка по якорям +5\n' +
    '    - cсылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n' +
    '    - интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor:pointer,\n' +
    '    но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили\n' +
    '    при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему\n' +
    '    усмотрению, руководствуясь общим стилем макета +5\n' +
    '    - обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n' +
    ' Оценка за задание: 110 баллов'
)

/* Menu Button Scripts */
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu-item');

function toggleMenu() {
    menuButton.classList.toggle("open");
    menu.classList.toggle('active');
    overlay.classList.toggle('show');
    body.classList.toggle('hidden');
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



