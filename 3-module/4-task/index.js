function showSalary(users, age) {
  let str = '';
  for (let item of users) str += item.age<=age ? (str=='' ? '': '\n') + item.name +', '+ item.balance : '';
  return str;
}
