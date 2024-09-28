const num = [1, 2, 3, 4, 5];
const numInd = num.map((number) => number * num.indexOf(number));
console.log(numInd);
