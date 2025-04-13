document.addEventListener('DOMContentLoaded', () => {
  // Получаем кнопку "Вверх" по её ID
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
          scrollToTopButton.classList.add("show");
      } else {
          scrollToTopButton.classList.remove("show");
      }
  });

  scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });



  // menu
  let el_btn = document.querySelector(".icon-menu");
  let el_menu = document.querySelector(".menu__body");
  if(el_btn && el_menu) {
      el_btn.addEventListener('click', () => {
          el_btn.classList.toggle('_active');
          el_menu.classList.toggle("_active");
      });
  }





});
