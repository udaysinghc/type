function calculator(a, b) {
    var sum = a + b;
    var mul = a * b;
    var div = a / b;
    var rem = a % b;
    return { sum: sum, mul: mul, div: div, rem: rem };
}
console.log(calculator(10, 6));
// Function Expression (Anonymous):-
var greet = function (message) {
    return "Good Morning ".concat(message);
};
greet("amit");
// Arrow Function:-
var multiply = function (a, b) { return a * b; };
console.log(multiply(5, 10));
function divide(a, b) {
    return a / b;
}
console.log(divide(10, 2));
function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 5));
