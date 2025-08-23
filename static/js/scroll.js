  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 250) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });