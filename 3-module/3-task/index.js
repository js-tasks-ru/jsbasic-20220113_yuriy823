function camelize(str) {
  str = str.split('-');
  return str.map((itm,ndx) => (ndx > 0) ? itm[0].toUpperCase() + itm.slice(1) : itm).join('');
}
/*
function camelize(str) {
  str = str.split('-');
  for (let i=1; i<str.length; i++) str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  return str.join('');
}
*/
/*
function camelize(str) {
  let res = '';
  str = str.split('-');
  str.forEach((itm,ndx) => res += (ndx > 0) ? itm[0].toUpperCase() + itm.slice(1) : itm);
  return res;
}
*/
