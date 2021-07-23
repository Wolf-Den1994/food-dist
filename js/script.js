window.addEventListener('DOMContentLoaded', () => {
  // Tabs
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');

  function hediTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hediTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hediTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer
  const deadline = '2021-07-27';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector('.timer');
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes ');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  // modal
  const btnsOpenModal = document.querySelectorAll('[data-modal]');
  const bntCloseModal = document.querySelector('[data-close]');
  const modal = document.querySelector('.modal');

  const hideModal = (e) => {
    if (
      (!modal.classList.contains('hide') && e.target === modal) ||
      e.target === bntCloseModal ||
      e.code === 'Escape'
    ) {
      modal.classList.remove('show');
      modal.classList.add('hide');
      document.body.style.overflow = '';
    }
  };

  const showModal = () => {
    if (!modal.classList.contains('show')) {
      modal.classList.remove('hide');
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
      clearTimeout(modalTimerId);
    }

    bntCloseModal.addEventListener('click', hideModal);
    modal.addEventListener('click', hideModal);
    document.addEventListener('keydown', hideModal);
  };

  btnsOpenModal.forEach((btn) => {
    btn.addEventListener('click', showModal);
  });

  const modalTimerId = setTimeout(showModal, 15000);

  const sheckFinalPage = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      showModal();
      window.removeEventListener('scroll', sheckFinalPage);
    }
  };

  window.addEventListener('scroll', sheckFinalPage);

  // class

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const card = document.createElement('div');
      card.innerHTML = `
        <div class="menu__item">
          <img src="${this.src}" alt="${this.alt}">
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
      `;
      this.parent.append(card);
    }
  }

  new MenuCard(
    'img/tabs/vegy.jpg',
    'vegy',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
  ).render();

  new MenuCard(
    'img/tabs/elite.jpg',
    'elite',
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    '.menu .container'
  ).render();

  new MenuCard(
    'img/tabs/post.jpg',
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21,
    '.menu .container'
  ).render();

  // Forms
  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с вами свяжимся',
    failure: 'Что-то пошло не так...'
  }

  forms.forEach(item => {
    postData(item)
  })
  

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message.loading;
      form.append(statusMessage)
  
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');
  
      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);

      // в JSON
      const object = {}
      formData.forEach((value, key) => {
        object[key] = value
      });
      const json = JSON.stringify(object) 
  
      // request.send(formData)
      request.send(json);
  
      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response)
          statusMessage.textContent = message.success
          form.reset();
          setTimeout(() => {
            statusMessage.remove()
          },2000)
        } else {
          statusMessage.textContent = message.failure
        }
      })
    })
  }
});
