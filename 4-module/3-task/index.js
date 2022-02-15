function highlight(table) {
  // Значение ячейки таблицы в верхнем регистре / cell String Upper case
  let cellStrUp = (itm) => itm.firstChild.data.trim().toUpperCase(); 
  // Массив заголовка таблицы thead
  let thead_td = Array.from(table.querySelectorAll('thead td'));
  // Определение номера столбца по заголовку hName
  let colNmb = (hName) => thead_td.findIndex(item => cellStrUp(item) === hName.toUpperCase()); 
  
  for (tRow of table.rows) 
    if (!tRow.closest('thead')) { // пропустить заголовок
      // hidden
      tRow.hidden = (tRow.cells[colNmb('Status')].dataset.available == undefined);
      // available / unavailable
      if (!tRow.hidden) {
        if (tRow.cells[colNmb('Status')].dataset.available.toLowerCase()==='true') {
          tRow.classList.add('available');
        } else {
          tRow.classList.add('unavailable');
        }
      }      
      // Gender 
      let m_or_f = cellStrUp(tRow.cells[colNmb('Gender')]);
      switch(m_or_f) {
        case 'M':  
          m_or_f = 'male';
          break;
        case 'F':  
          m_or_f = 'female';
          break;
        default:
          m_or_f = null; // если в столбце Gender будет значение отличное от m,f
      }
      tRow.classList.add(m_or_f);
      // Age
      let age = cellStrUp(tRow.cells[colNmb('Age')]);
      if (isFinite(age) && age < 18 ) {
        tRow.style = "text-decoration: line-through";
      }   
    }
}