function initCarousel() {
  let slider =  document.querySelector('.carousel__inner'); // слайдер
  let slidesNumb = document.querySelectorAll('.carousel__inner .carousel__slide').length; // кол-во слайдов в ленте
  let arrrowLeft = document.querySelector('.carousel__arrow_left');
  let arrrowRight = document.querySelector('.carousel__arrow_right');
  let pos = 0; // текущая позиция == номер слайда - 1

  arrowsShowHide();   

  document.onclick = shiftPicture;
  
  function shiftPicture(event) {
    let shiftVal = 0;
    let slideWidth = slider.offsetWidth; // ширина одного слайда
    
    let course = ''; // направление движения: L / R
    if (event.target.closest('.carousel__arrow_right')) course = 'L';
    else if (event.target.closest('.carousel__arrow_left')) course = 'R';
    
    if (course) {
      shiftVal = slideWidth * ((course === 'L') ? ++pos : --pos);
      let trans = 'translateX(-' + shiftVal + 'px)';
      slider.style.transform = trans;

      arrowsShowHide();
    };
  };

  function arrowsShowHide() { // отображение кнопок
    if (pos === 0) arrrowLeft.style.display = 'none';
    else arrrowLeft.style.display = '';
    if (pos === slidesNumb-1) arrrowRight.style.display = 'none';
    else arrrowRight.style.display = '';
  };

}
