document.addEventListener('DOMContentLoaded', () => {
    // === Слайдер 2 (отзывы) ===
    const track2 = document.querySelector('.slider__track_2');
    const slides2 = document.querySelectorAll('.review-card');
    const prevBtn2 = document.querySelector('.slider__btn.prev2');
    const nextBtn2 = document.querySelector('.slider__btn.next2');
    let currentSlide2 = 0;
  
    function getSlideData2() {
      const slideWidth = slides2[0].offsetWidth + 30;
      const visibleArea = document.querySelector('.slider2').offsetWidth;
      const trackWidth = slideWidth * slides2.length;
      const maxOffset = trackWidth - visibleArea;
      return { slideWidth, maxOffset };
    }
  
    function updateSlider2() {
      const { slideWidth, maxOffset } = getSlideData2();
      let offset = slideWidth * currentSlide2;
  
      if (offset > maxOffset) {
        offset = maxOffset;
        currentSlide2 = Math.floor(offset / slideWidth);
      }
  
      track2.style.transform = `translateX(-${offset}px)`;
    }
  
    nextBtn2?.addEventListener('click', () => {
      currentSlide2++;
      updateSlider2();
    });
  
    prevBtn2?.addEventListener('click', () => {
      if (currentSlide2 > 0) {
        currentSlide2--;
        updateSlider2();
      }
    });
  
    window.addEventListener('resize', updateSlider2);
    updateSlider2();

  });