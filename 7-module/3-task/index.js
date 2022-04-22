import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {

  sliderElem = null;
  stepCount = 0;
  value = 0;
  
  constructor({ steps, value = 0 }) {
    this.sliderElem = createElement(`
    <!--Корневой элемент слайдера-->
    <div class="slider">

      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: 50%;">
        <span class="slider__value">2</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: 50%;"></div>

      <!--Шаги слайдера-->
      <div class="slider__steps">
        <span></span>
        <span></span>
        <span class="slider__step-active"></span>
        <span></span>
        <span></span>
      </div>
    </div>
    `);
    // steps: количество шагов слайдера
    this.stepCount = steps;
    let sliderSteps = this.sliderElem.querySelector('.slider__steps');
    if (sliderSteps) {
      sliderSteps.innerHTML = '';
      let span = null;
      for (let i=0; i < steps; i++) {
        span = createElement(`<span></span>`);
        if (i === value) span.classList.add('slider__step-active'); 
        sliderSteps.append(span);
      };
      // Начальное положение 
      this.sliderRefresh(0);
      this.sliderElem.onclick = this.sliderClick;
    };
  }

  get elem() {
    return this.sliderElem;
  }
  
  sliderRefresh = (percent) => {
    // Ползунок
    let elem = this.sliderElem.querySelector('.slider__thumb');
    if (elem) { 
      elem.style.left = percent + '%';
      // Цифра
      elem = elem.querySelector('.slider__value');
      if (elem) elem.innerHTML = this.value;
      // Шкала
      elem = this.sliderElem.querySelector('.slider__progress');
      if (elem) elem.style.width = percent + '%';
    };  
  }

  sliderClick = (event) => { 
    // if (event.which !== 1) return;
    // Кроме ползунка
    let elem = event.target.closest('.slider__thumb');
    if (elem) return;
    let slider = event.target.closest('.slider');
    if (slider) {
      let leftPos = event.clientX - slider.getBoundingClientRect().left;
      this.value = Math.round((leftPos/slider.offsetWidth)*(this.stepCount-1));
      let percent = this.value * 100/(this.stepCount-1);
      this.sliderRefresh(percent);
      // Generate user event
      let sliderChange = new CustomEvent('slider-change', {
        detail: this.value, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает
      });
      slider.dispatchEvent(sliderChange);
    };
  }  

}
