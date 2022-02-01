(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModal2Btn: document.querySelector('[data-modal2-open]'),
    openModal3Btn: document.querySelector('[data-modal3-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModal2Btn.addEventListener('click', toggleModal);
  refs.openModal3Btn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();