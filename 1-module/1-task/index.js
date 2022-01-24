function factorial(n) {
  let res;
  if (isNaN(+n) || (typeof(+n) != 'number') || (n < 0)) {
    return NaN;
  } else {
    res = 1;
  };
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res
};
