function modal() {
  // modal
  const btnsOpenModal = document.querySelectorAll('[data-modal]');
  const bntCloseModal = document.querySelector('[data-close]');
  const modal = document.querySelector('.modal');

  const closeModal = () => {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  };

  const openModal = () => {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    clearTimeout(modalTimerId);
  };

  const hideModal = (e) => {
    if (
      (!modal.classList.contains('hide') && e.target === modal) ||
      e.target === bntCloseModal ||
      e.code === 'Escape'
    ) {
      closeModal();
    }
  };

  const showModal = () => {
    if (!modal.classList.contains('show')) {
      openModal();
    }

    // bntCloseModal.addEventListener('click', hideModal);
    modal.addEventListener('click', hideModal);
    document.addEventListener('keydown', hideModal);
  };

  btnsOpenModal.forEach((btn) => {
    btn.addEventListener('click', showModal);
  });

  const modalTimerId = setTimeout(showModal, 30000);

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

module.exports = modal;
