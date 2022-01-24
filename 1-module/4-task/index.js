function checkSpam(str) {
  str = str.toUpperCase();
  return str.includes('1xBet'.toUpperCase()) || str.includes('XXX'.toUpperCase());
}
