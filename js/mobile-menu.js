
(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile-open"),
    
    openAbout: document.querySelector(".js-about"),
    openService: document.querySelector(".js-service"),
    openMasters: document.querySelector(".js-masters"),
    openContact: document.querySelector(".js-contacts"),
    closeMenuBtn: document.querySelector(".mobile-close"),
    menu: document.querySelector(".menu"),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
  refs.openAbout.addEventListener('click', toggleMenu);
  refs.openService.addEventListener('click', toggleMenu);
  refs.openMasters.addEventListener('click', toggleMenu);
  refs.openContact.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
  
})();