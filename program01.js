// Reverse a string:-
function reverseString(str) {
    var revString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    return revString;
}
console.log("The reverse string is: -" + reverseString("hello"));
// Reverse a number:-
function revNumber(num) {
    var revNum = 0;
    while (num > 0) {
        revNum = revNum * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return revNum;
}
console.log("The Rev Number is: " + revNumber(1254));
// Find Max in array:
function maxArray(num) {
    var max = num[0];
    num.forEach(function (num) {
        if (num > max) {
            max = num;
        }
    });
    return max;
}
console.log(maxArray([12, 25, 34, 6]));
// Find the missing number:
function missingNumber(num, n) {
    var sumOfNaturalNumber = (n * (n + 1)) / 2;
    var arrSum = 0;
    num.forEach(function (ele) {
        arrSum += ele;
    });
    var missingNumber = sumOfNaturalNumber - arrSum;
    return missingNumber;
}
var arr = [1, 2, 3, 4, 6];
var n = 6;
console.log("The missing number is:- " + missingNumber(arr, n));
