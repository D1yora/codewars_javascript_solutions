const quarterOf = (month) => {
  // Your code here
  if (1 <= month >= 2) {
    console.log("the first quarter");
  } else if (3 <= month >= 5) {
    console.log("the second quarter");
  } else if (6 <= month >= 8) {
    console.log("the third quarter");
  } else if (9 <= month >= 11) {
    console.log("the forth quarter");
  }
};
// console.log(quarterOf(6));
quarterOf(8);
