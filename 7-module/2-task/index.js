import createElement from '../../assets/lib/create-element.js';

export default class Modal {

  modalWinElem = null;

  constructor() {
    this.modalWinElem = createElement(`
    <div class="container">
    <!--Корневой элемент Modal-->
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>
    
        <div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
    
            <h3 class="modal__title">
              Вот сюда нужно добавлять заголовок
            </h3>
          </div>
    
          <div class="modal__body">
            A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>
    
      </div>
    </div>
    `);
    // Закрытие по клику по кнопке [X]
    let elem = this.modalWinElem.querySelector('.modal__close');
    if (elem) elem.onclick = this.close;
  }

  open = () => {
    document.body.append(this.modalWinElem);
    document.body.classList.add('is-modal-open');
    // Закрытие по нажатию клавиши ESC
    document.addEventListener('keydown', this.docKeyDown);
  }

  setTitle = (title) => {
    let elem = this.modalWinElem.querySelector('.modal__title');
    if (elem) elem.innerHTML = title;
  }

  setBody = (modalBody) => {
    let elem = this.modalWinElem.querySelector('.modal__body');
    if (elem) { 
      elem.innerHTML = '';
      elem.append(modalBody);
    }  
  }

  close = () => {
    let elem = document.body.querySelector('.container .modal')
    if (elem) {
      elem = elem.closest('.container');
      if (elem) elem.remove();
    };  
    document.body.classList.remove('is-modal-open');
    // Удаление прослушивателя клавиши ESC
    document.removeEventListener('keydown', this.docKeyDown);
  }

  docKeyDown = (event) => {
    if (event.code === 'Escape') this.close();
  }

}
