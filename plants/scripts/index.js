console.log(
  '1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n' +
  '    - При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20\n' +
  '    - Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20\n' +
  '    - Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10\n' +
  '2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n' +
  '    - При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25\n' +
  '    - Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25\n' +
  '3. В разделе contacts реализован select с выбором городов +25\n' +
  '    - В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15\n' +
  '    - При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10\n' +
  ' Оценка за задание: 125 баллов'
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
  const cityName = document.querySelector(".city-name");
  const cityPhone = document.querySelector(".city-phone");
  const cityAdress = document.querySelector(".city-adress");
  const cityCallUs = document.querySelector(".call-us");
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
      cityCallUs.href = "tel:+1-585-393-0001"; 
    }
    if (text === 'New York City') {
      cityName.innerText = "New York City";
      cityPhone.innerText = "+1	212	456 0002";
      cityAdress.innerText = "9 East 91st Street";
      cityCallUs.href = "tel:+1-212-456-0002"; 
    }
    if (text === 'Yonkers, NY') {
      cityName.innerText = "Yonkers, NY";
      cityPhone.innerText = "+1	914	678 0003";
      cityAdress.innerText = "511 Warburton Ave";
      cityCallUs.href = "tel:+1-914-678-0003"; 
    }
    if (text === 'Sherrill, NY') {
      cityName.innerText = "Sherrill, NY";
      cityPhone.innerText = "+1 315 908 0004";
      cityAdress.innerText = "14 WEST Noyes BLVD";
      cityCallUs.href = "tel:+1-315-908-0004"; 
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






