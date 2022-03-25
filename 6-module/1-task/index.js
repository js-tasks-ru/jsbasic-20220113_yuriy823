/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  #myTable = null; // приватное св-во 
  
  constructor( rows ) {
    const headers = ['Имя', 'Возраст', 'Зарплата', 'Город']; // заголовки столбцов

    this.#myTable = document.createElement('table');
    
    // Заголовок таблицы
    let myTHead = document.createElement('thead');
    let myTR = document.createElement('tr');
    for (let i=0; i <= headers.length; i++) {
      let myTH = document.createElement('th');
      myTH.append(i < headers.length ? headers[i] : '');
      myTR.append(myTH);
    };
    myTHead.append(myTR);
    this.#myTable.append(myTHead);
    
    // Содержание таблицы
    let myTBody = document.createElement('tbody');
    for (let row of rows) {
      myTR = document.createElement('tr');    
      for (let k in row) {
        let myTD = document.createElement('td');
        myTD.append(row[k]);
        myTR.append(myTD);
      };
      // Кнопка "X" в конце строки
      let myBotton = document.createElement('button');
      myBotton.append('X');
      myBotton.onclick = this.lineDel;
      let myTD = document.createElement('td');
      myTD.append(myBotton);
      myTR.append(myTD);
      myTBody.append(myTR);
    }; 
    this.#myTable.append(myTBody);   
  }
  get elem() { // ReadOnly поле, т.к. нет метода set
    return this.#myTable;
  } 
  lineDel(event) { // удаление строки таблицы
    let elem = event.target.closest('tr');
    if (elem) elem.remove(); // если не пусто и Ok
  }

}  