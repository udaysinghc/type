var arr = [15, 521, 141, 325, 58, 25, 26, 21, 11];
for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    if (arr[i] % 2 == 0) {
        break;
    }
}
console.log("Array traversal in reverse order completed.");
// for of loops:-
var number = [1, 20, 300, 4000, 50000];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var num = number_1[_i];
    console.log(num);
}
var program = ["java", "python", "C", "C++"];
for (var i in program) {
    console.log(i); // It will give the index of an element 
    console.log(program[i]); // It will give the element at the index
}
var greet = "Good Afternoon";
var vowel = "";
var cons = "";
for (var _a = 0, greet_1 = greet; _a < greet_1.length; _a++) {
    var ch = greet_1[_a];
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A") {
        vowel += ch + " ";
    }
    else {
        cons += ch + " ";
    }
}
console.log("Consonants:", cons);
console.log("Vowels:", vowel);
