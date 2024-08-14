// function declaration
function getSquare (width, height) {
    const square= width * height
    return square
};
const result = getSquare (5,10);
console.log(result);

//function expression
const getSquare2 = function(width, height){
    const square2= width * height
    return square2
};
const result2 = getSquare2 (5,10);
console.log(result2);

// arrow function
const getSquare3 = (width, height) => {
    const square3= width * height
    return square3
}
const result3 = getSquare3 (5,10);
console.log(result3);
