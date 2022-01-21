function checkSpam(str) {
  str = str.toUpperCase();
  return str.indexOf('1xBet'.toUpperCase())>=0 || str.indexOf('XXX'.toUpperCase())>0;
}
