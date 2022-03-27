import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  carousel = null;
  slider = null;
  slidePos = 0; // номер слайда
  slidesNumb = 0; // кол-во слайдов
  arrrowLeft = null;
  arrrowRight = null;

  constructor(slides) {
    this.carousel = createElement(`
    <!--Корневой элемент карусели-->
    <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">
      </div>`
    );
    this.slider = this.carousel.querySelector('.carousel__inner'); // слайдер  
    this.arrrowLeft = this.carousel.querySelector('.carousel__arrow_left');
    this.arrrowRight = this.carousel.querySelector('.carousel__arrow_right');

    for (let slide of slides) {
      let slideElem = createElement(`
        <div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/...значение slide.image..." class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€<!--значение slide.price--></span>
            <div class="carousel__title"><!--значение slide.name--></div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`
      );
      // name
      let elem = slideElem.querySelector('.carousel__title');
      elem.innerHTML = slide.name;
      // price
      elem = slideElem.querySelector('.carousel__price');
      elem.innerHTML = '€' + slide.price.toFixed(2);
      // image
      elem = slideElem.querySelector('.carousel__img');
      let src = elem.getAttribute('src');
      let srcArr = src.split('/');
      srcArr[srcArr.length - 1] = slide.image;
      src = srcArr.join('/');
      elem.setAttribute('src', src);
      // id
      slideElem.dataset.id = slide.id;
      // Plus button event
      let plusEvent = new CustomEvent("product-add", { detail: slide.id, bubbles: true });
      elem = slideElem.querySelector('.carousel__button');
      elem.onclick = () => (this.elem.dispatchEvent(plusEvent));

      elem = this.carousel.querySelector('.carousel__inner');
      elem.append(slideElem);
    };
    this.arrowsShowHide();
    // Arrows Events
    this.slidesNumb = slides.length;
    this.carousel.onclick = this.slideShift;
    // Проверка прослушивания
    // document.addEventListener('product-add', (event) => alert(event.detail))
  }

  get elem() {
    return this.carousel;
  }

  slideShift = (event) => { // сдвиг слайда

    let elem = event.target.closest('.carousel__arrow');
    if (elem) {
      let course = ''; // направление движения: L / R
      if (event.target.closest('.carousel__arrow_right')) course = 'L';
      else if (event.target.closest('.carousel__arrow_left')) course = 'R';

      if (course) {
        let slideWidth = this.slider.offsetWidth; // ширина одного слайда
        let shiftVal = slideWidth * ((course === 'L') ? ++this.slidePos : --this.slidePos);
        let trans = 'translateX(-' + shiftVal + 'px)';
        this.slider.style.transform = trans;
        this.arrowsShowHide();
      };
    };
  }
  
  arrowsShowHide = () => { // отображение кнопок
    if (this.slidePos === 0) this.arrrowLeft.style.display = 'none';
    else this.arrrowLeft.style.display = '';
    if (this.slidePos === this.slidesNumb-1) this.arrrowRight.style.display = 'none';
    else this.arrrowRight.style.display = '';
  };

}
