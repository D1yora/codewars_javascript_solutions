function century(year) {
  let quotient = Math.floor(year / 100);
  if (year % 100 !== 0) {
    quotient += 1;
  }
  return quotient;
}

console.log(century(1655));
