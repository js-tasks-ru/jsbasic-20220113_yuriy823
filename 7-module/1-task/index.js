import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {

  categories = null;
  ribbonInner = null;
  buttonLeft = null;
  buttonRight = null;

  constructor(categories) {
    this.categories = createElement(`
    <!--Корневой элемент RibbonMenu-->
    <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
      </nav>
      
      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      
     </div>
    `);
    
    this.ribbonInner = this.categories.querySelector('.ribbon__inner'); // ссылки на категории
    this.buttonLeft  = this.categories.querySelector('.ribbon__arrow_left');
    this.buttonRight = this.categories.querySelector('.ribbon__arrow_right');

    for (let categorie of categories) {
      let categElem = createElement(`<a href="#" class="ribbon__item" data-id="salads">Salads</a>`);
      // id
      categElem.dataset.id = categorie.id;
      // Name
      categElem.innerHTML = categorie.name;
      categElem.onclick = this.categorieSelect;
      this.ribbonInner.append(categElem);
    }; 
    this.buttonsShowHide(true);  
    
    this.elem.onclick = this.ribbonScroll;

    // Проверка прослушивания
    // document.addEventListener('ribbon-select', (event) => alert(event.detail))
  }

  get elem() {
    return this.categories;
  }  

  ribbonScroll = (event) => { 
    const oneStep = 350;
    // Стрелки
    let elem = event.target.closest('.ribbon__arrow');
    if (elem) {
      let course = ''; // направление движения: B (backward/назад) / F (forward/вперёд)
      if (event.target.closest('.ribbon__arrow_right')) course = 'F';
      else if (event.target.closest('.ribbon__arrow_left')) course = 'B';
     
      if (course) {
        let scrollVal = 0;
        if (course === 'F') scrollVal = oneStep;
        else scrollVal = -oneStep;
        this.ribbonInner.scrollBy(scrollVal, 0);
      };
      this.buttonsShowHide();  
    };
  }

  buttonsShowHide = (initCall) => { // отображение кнопок; initCall = True - инициализация до отображения на экране 
    if (this.ribbonInner.scrollLeft === 0)
      this.buttonLeft.classList.remove('ribbon__arrow_visible');
    else 
      this.buttonLeft.classList.add('ribbon__arrow_visible');
    
    if ((this.ribbonInner.scrollWidth - this.ribbonInner.scrollLeft - this.ribbonInner.clientWidth < 1) && !initCall)
      this.buttonRight.classList.remove('ribbon__arrow_visible');
    else   
      this.buttonRight.classList.add('ribbon__arrow_visible');
  }

  categorieSelect = (event) => { // Выбор категории
    event.preventDefault();
    let elem = event.target.closest('.ribbon__item');
    if (elem) {
      let itemActiveId = elem.dataset.id;
      let items = this.ribbonInner.querySelectorAll('.ribbon__item');
      for (let item of items) {
        if (item.dataset.id === itemActiveId) 
          item.classList.add('ribbon__item_active');
        else 
          item.classList.remove('ribbon__item_active');
      }; 
      // Select categorie event
      let ribbonSelect = new CustomEvent('ribbon-select', { detail: itemActiveId, bubbles: true });
      elem.dispatchEvent(ribbonSelect);
    };  
  };  
}
