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

/* Accordion Button Scripts */
const contacts = document.getElementById('contacts');
const boxButtons = document.querySelectorAll('.box-btn');
boxButtons.forEach(e => {
  e.addEventListener('click', (e => {
    contacts.scrollIntoView({ behavior: "smooth" });
  }))
})


/* Service Scripts */
const serviceBtn = document.querySelectorAll('.service-btn button');
console.log(serviceBtn)
const btnGarden = document.querySelector("#gardens");
const btnLawn = document.querySelector("#lawn");
const btnPlanting = document.querySelector("#planting");
const itemGarden = document.querySelectorAll(".service-item.gardens-item");
const itemLawn = document.querySelectorAll(".service-item.lawn-item");
const itemPlanting = document.querySelectorAll(".service-item.planting-item");

serviceBtn.forEach(e => {
  e.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('service-active');

    if (e.currentTarget === btnGarden) {
      if (btnLawn.classList.contains("service-active") ||
        btnPlanting.classList.contains("service-active")) {
        itemGarden.forEach(i => i.classList.toggle("service-item-blur"));
      } else {
        itemLawn.forEach(i => i.classList.toggle("service-item-blur"));
        itemPlanting.forEach(i => i.classList.toggle("service-item-blur"));
      }
    }
    if (e.currentTarget === btnLawn) {
      if (btnGarden.classList.contains("service-active") ||
        btnPlanting.classList.contains("service-active")) {
        itemLawn.forEach(i => i.classList.toggle("service-item-blur"));
      } else {
        itemGarden.forEach(i => i.classList.toggle("service-item-blur"));
        itemPlanting.forEach(i => i.classList.toggle("service-item-blur"));
      }
    }
    if (e.currentTarget === btnPlanting) {
      if (btnGarden.classList.contains("service-active") ||
        btnLawn.classList.contains("service-active")) {
        itemPlanting.forEach(i => i.classList.toggle("service-item-blur"));
      } else {
        itemGarden.forEach(i => i.classList.toggle("service-item-blur"));
        itemLawn.forEach(i => i.classList.toggle("service-item-blur"));
      }
    }

    /*Активные только две кнопки*/
    let sum = document.getElementsByClassName('service-active').length;
    if (sum === 2) {
      document.querySelectorAll('.service-btn .btn-base:not(.service-active)').forEach(e => {
        e.disabled = true;
      });
    }
    if (sum < 2) {
      const elements = document.querySelector('.service-btn .btn-base[disabled]');
      if (elements) {
        elements.disabled = false;
      }
    }
    e.stopPropagation();
  }, true)

})




/* cityCard Scripts */


function select() {

  const cityCard = document.querySelector('.city-card');
  const cityName = document.querySelector(".city-text.name");
  const cityPhone = document.querySelector(".city-text.phone");
  const cityAdress = document.querySelector(".city-text.adress");
  const selectOptions = document.querySelectorAll('.select-option');
  const selectHeader = document.querySelector('.select-header');
  const contactsImg = document.querySelector('.wrapper-contacts .img-xs');

  function selectOption() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select-current');
    currentText.innerText = text;
    select.classList.remove('is-active');
    select.classList.add('is-select');
    contactsImg.style.visibility = "hidden";
    cityCard.classList.remove('hidden');

    if (text === 'Canandaigua, NY') {
      cityName.innerText = "Canandaigua, NY";
      cityPhone.innerText = "+1 585 393 0001";
      cityAdress.innerText = "151 Charlotte Street";
    }
    if (text === 'New York City') {
      cityName.innerText = "New York City";
      cityPhone.innerText = "+1	212	456 0002";
      cityAdress.innerText = "9 East 91st Street";
    }
    if (text === 'Yonkers, NY') {
      cityName.innerText = "Yonkers, NY";
      cityPhone.innerText = "+1	914	678 0003";
      cityAdress.innerText = "511 Warburton Ave";
    }
    if (text === 'Sherrill, NY') {
      cityName.innerText = "Sherrill, NY";
      cityPhone.innerText = "+1	315	908 0004";
      cityAdress.innerText = "14 WEST Noyes BLVD";
    }
  }

  selectHeader.addEventListener('click', (e => {
    e.currentTarget.parentElement.classList.toggle('is-active');
    // e.currentTarget.parentElement.classList.remove('is-select');
  }))

  selectOptions.forEach(option => {
    option.addEventListener('click', selectOption)
  });



};


select();






