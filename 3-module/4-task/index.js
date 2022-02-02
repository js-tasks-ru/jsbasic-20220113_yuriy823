function showSalary(users, age) {
  let str;
  users.filter(item => item.age <= age).forEach(item => str = (str==undefined ? '' : str + '\n') + item.name +', '+ item.balance);  
  return str; // возвращает undefined, а не пустую строку, если подходящих объектов нет 
}
