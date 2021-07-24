const closeModal = (modalSelector) => {
  const modal = document.querySelector(modalSelector);

  modal.classList.remove('show');
  modal.classList.add('hide');
  document.body.style.overflow = '';
};

const openModal = (modalSelector, modalTimerId) => {
  const modal = document.querySelector(modalSelector);

  modal.classList.remove('hide');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  console.log(modalTimerId)
  if (modalTimerId) {
    clearTimeout(modalTimerId);
  }
};

const hideModal = (modalSelector, e) => {
  const modal = document.querySelector(modalSelector);
  const bntCloseModal = document.querySelector('[data-close]');

  if (
    (!modal.classList.contains('hide') && e.target === modal) ||
    e.target === bntCloseModal ||
    e.code === 'Escape'
  ) {
    closeModal(modalSelector);
  }
};

export const showModal = (modalSelector, modalTimerId) => {
  const modal = document.querySelector(modalSelector);

  if (!modal.classList.contains('show')) {
    openModal(modalSelector, modalTimerId);
  }

  // bntCloseModal.addEventListener('click', hideModal);
  modal.addEventListener('click', hideModal.bind(null, modalSelector));
  document.addEventListener('keydown', hideModal.bind(null, modalSelector));
};

function modal(triggerSelector, modalSelector, modalTimerId) {
  // modal
  const btnsOpenModal = document.querySelectorAll(triggerSelector);
  const bntCloseModal = document.querySelector('[data-close]');
  const modal = document.querySelector(modalSelector);

  btnsOpenModal.forEach((btn) => {
    btn.addEventListener('click', () => showModal(modalSelector, modalTimerId));
  });

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
}

export default modal;
export { closeModal };
export { openModal };
