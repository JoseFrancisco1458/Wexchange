window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.body.classList.remove('splash-active'); // <-- Esta línea es la clave
    const splash = document.querySelector('.effect-splash');
    if (splash) {
      splash.style.display = 'none';
    }
  }, 1000); // 2s de animación + 1s de margen
});