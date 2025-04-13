document.addEventListener('DOMContentLoaded', () => {
    // === Слайдер 1 (основной) ===
    const track1 = document.querySelector('.slider__track');
    const slides1 = document.querySelectorAll('.slide');
    const prevBtn1 = document.querySelector('.slider__btn.prev');
    const nextBtn1 = document.querySelector('.slider__btn.next');
    let currentSlide1 = 0;
  
    function getSlideData1() {
      const slideWidth = slides1[0].offsetWidth + 80;
      const visibleArea = document.querySelector('.slider').offsetWidth;
      const trackWidth = slideWidth * slides1.length;
      const maxOffset = trackWidth - visibleArea;
      return { slideWidth, maxOffset };
    }
  
    function updateSlider1() {
      const { slideWidth, maxOffset } = getSlideData1();
      let offset = slideWidth * currentSlide1;
  
      if (offset > maxOffset) {
        offset = maxOffset;
        currentSlide1 = Math.floor(offset / slideWidth);
      }
  
      track1.style.transform = `translateX(-${offset}px)`;
    }
  
    nextBtn1?.addEventListener('click', () => {
      currentSlide1++;
      updateSlider1();
    });
  
    prevBtn1?.addEventListener('click', () => {
      if (currentSlide1 > 0) {
        currentSlide1--;
        updateSlider1();
      }
    });
  
    window.addEventListener('resize', updateSlider1);
    updateSlider1();
});