function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    let sal = salaries[key];
    if (typeof(sal) == 'number' && isFinite(sal) && !isNaN(sal)) {
      sum += sal;
    }
  };
  return sum;
};
