// document.addEventListener('DOMContentLoaded', () => {
//     // === Кнопки раскрытия услуг ===
//     document.querySelectorAll('.service').forEach(service => {
//       const btn = service.querySelector('.toggle-btn');
//       btn.addEventListener('click', () => {
//         service.classList.toggle('open');
//       });
//     });

// });

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.service').forEach(service => {
//     const btn = service.querySelector('.toggle-btn');
//     const content = service.querySelector('.service__content');

//     btn.addEventListener('click', () => {
//       const isOpen = service.classList.contains('open');

//       if (isOpen) {
//         // Закрываем
//         content.style.height = `${content.scrollHeight}px`; // фиксируем текущую высоту
//         requestAnimationFrame(() => {
//           content.style.height = '0';
//           content.classList.add('closing');
//           content.classList.remove('active');
//         });
//         content.addEventListener('transitionend', function handler() {
//           service.classList.remove('open');
//           content.classList.remove('closing');
//           content.removeEventListener('transitionend', handler);
//         });
//       } else {
//         // Открываем
//         content.classList.add('opening');
//         content.style.display = 'block';
//         const height = content.scrollHeight;
//         content.style.height = '0';
//         requestAnimationFrame(() => {
//           content.style.height = `${height}px`;
//         });
//         content.addEventListener('transitionend', function handler() {
//           content.style.height = 'auto'; // возвращаем авто
//           content.classList.remove('opening');
//           content.classList.add('active');
//           content.removeEventListener('transitionend', handler);
//         });
//         service.classList.add('open');
//       }

//       btn.classList.toggle('rotated'); // для анимации поворота кнопки
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service').forEach(service => {
    const header = service.querySelector('.service__header');
    const content = service.querySelector('.service__content');
    const btn = service.querySelector('.toggle-btn');

    header.addEventListener('click', () => {
      const isOpen = service.classList.contains('open');

      if (isOpen) {
        // Закрываем
        content.style.height = `${content.scrollHeight}px`; // фиксируем текущую высоту
        requestAnimationFrame(() => {
          content.style.height = '0';
          content.classList.add('closing');
          content.classList.remove('active');
        });
        content.addEventListener('transitionend', function handler() {
          service.classList.remove('open');
          content.classList.remove('closing');
          content.removeEventListener('transitionend', handler);
        });
      } else {
        // Открываем
        content.classList.add('opening');
        content.style.display = 'block';
        const height = content.scrollHeight;
        content.style.height = '0';
        requestAnimationFrame(() => {
          content.style.height = `${height}px`;
        });
        content.addEventListener('transitionend', function handler() {
          content.style.height = 'auto';
          content.classList.remove('opening');
          content.classList.add('active');
          content.removeEventListener('transitionend', handler);
        });
        service.classList.add('open');
      }

      // Вращаем плюсик
      btn.classList.toggle('rotated');
    });
  });
});
