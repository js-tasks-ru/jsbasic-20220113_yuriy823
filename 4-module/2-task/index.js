function makeDiagonalRed(table) {
  for (let i=0; i<table.rows.length; i++)
    table.rows[i].cells[i].style.backgroundColor = 'red'
}  
/* Длинное решение
for (let r of table.rows)  {
  for (let c of r.cells) {
    c.cellIndex === r.rowIndex ? c.style.backgroundColor = 'red' : null
  }
}
*/    
