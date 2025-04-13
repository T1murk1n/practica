document.addEventListener('DOMContentLoaded', () => {
    // === Кнопки раскрытия услуг ===
    document.querySelectorAll('.service').forEach(service => {
      const btn = service.querySelector('.toggle-btn');
      btn.addEventListener('click', () => {
        service.classList.toggle('open');
      });
    });

});