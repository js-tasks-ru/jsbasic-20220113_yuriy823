import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {

  #card = null;
  #prodId = null;

  constructor(product) {
    this.#card = createElement(`
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/picture.png" class="card__image" alt="product">
        <span class="card__price">price</span>
      </div>
      <div class="card__body">
        <div class="card__title">name</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`);
    // name
    let elem = this.#card.querySelector('.card__title');
    elem.innerHTML = product.name;
    // price
    elem = this.#card.querySelector('.card__price');
    elem.innerHTML = '€' + product.price.toFixed(2);
    // image
    elem = this.#card.querySelector('.card__image');
    let src = elem.getAttribute('src');
    src = src.replace('picture.png', product.image);
    elem.setAttribute('src', src);
    // button click
    elem = this.#card.querySelector('.card__button');
    elem.onclick = this.productAdd;
    // id
    elem.id = product.id;
  }

  get elem() {
    return this.#card;
  }

  productAdd(event) {
    let newEvent = new CustomEvent("product-add", 
    { // имя события должно быть именно "product-add"
      detail: event.target.closest('.card__button').id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });
    let elem = event.target.closest('.card'); // корневой элемент
    elem.dispatchEvent(newEvent);
  }
}