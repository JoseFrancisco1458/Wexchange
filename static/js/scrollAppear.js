document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-appear');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

  // Para mostrar los elementos visibles al cargar la página
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    ) {
      el.classList.add('visible');
    }
  });
});