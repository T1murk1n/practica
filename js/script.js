document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider__track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider__btn.prev');
    const nextBtn = document.querySelector('.slider__btn.next');

    let currentSlide = 0;

    function getSlideData() {
      const slideWidth = slides[0].offsetWidth + 80; // 20px — gap между карточками
      const visibleArea = document.querySelector('.slider').offsetWidth;
      const trackWidth = slideWidth * slides.length;
      const maxOffset = trackWidth - visibleArea;
      return { slideWidth, maxOffset };
    }

    function updateSlider() {
      const { slideWidth, maxOffset } = getSlideData();
      let offset = slideWidth * currentSlide;

      // если уходим дальше, чем можем — фиксируем
      if (offset > maxOffset) {
        offset = maxOffset;
        currentSlide = Math.floor(offset / slideWidth);
      }

      track.style.transform = `translateX(-${offset}px)`;
    }

    nextBtn.addEventListener('click', () => {
      currentSlide++;
      updateSlider();
    });

    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });

    window.addEventListener('resize', () => {
      updateSlider();
    });

    updateSlider(); // инициализация




    document.querySelectorAll('.service').forEach(service => {
      const btn = service.querySelector('.toggle-btn');
      btn.addEventListener('click', () => {
        service.classList.toggle('open');
      });
    });
  });