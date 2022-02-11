function highlight(table) {
  let cellStrUp = (itm) => itm.firstChild.data.trim().toUpperCase(); // cell String Upper case
  let thead_td = Array.from(table.querySelectorAll('thead td'));
  let colNmb = (hName) => thead_td.findIndex(item => cellStrUp(item) === hName.toUpperCase()); // номер столбца с заголовком hName
  for (tRow of table.rows) 
    if (!tRow.closest('thead')) { // пропустить заголовок
      tRow.hidden = tRow.cells[colNmb('Status')].dataset.available == undefined;
      if (!tRow.hidden)      
        tRow.classList.add(tRow.cells[colNmb('Status')].dataset.available.toLowerCase()==='true' ? 'available' : 'unavailable'); // getAttribute('data-available')
      let m_or_f = cellStrUp(tRow.cells[colNmb('Gender')]);
      m_or_f = m_or_f==='M' ? 'male' : m_or_f==='F' ? 'female' : null; // в общем случае m_or_f может иметь другие значения кроме m,f
      tRow.classList.add(m_or_f);
      let age = cellStrUp(tRow.cells[colNmb('Age')]);
      if (isFinite(age) && age < 18 )
        tRow.style = "text-decoration: line-through"; 
    }
}
