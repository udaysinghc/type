// remove the duplicate value:
var arr1 = [10, 14, 9, 8, 15, 20, 4, 4, 12, 14, 32, 11];
var removeDuplicat = [];
arr1.forEach(function (n) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[j] > arr1[j + 1]) {
            var temp = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = temp;
        }
    }
});
for (var i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] != arr1[i + 1]) {
        removeDuplicat.push(arr1[i]);
    }
}
console.log(removeDuplicat);
// Anagram string
var str1 = "java";
var str2 = "ajva";
if (str1.length != str2.length) {
    console.log("Not an anagram function");
}
else {
    var arr1_1 = str1.split("");
    var arr2 = str2.split("");
    arr1_1.sort();
    arr2.sort();
    var flag = true;
    for (var i = 0; i < arr1_1.length; i++) {
        if (arr1_1[i] != arr2[i]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log("Anagram");
    }
    else {
        console.log("Not a Anagram");
    }
}
// Count the alp in string:
var str = "aabbssacss";
var commonStr = "";
for (var i = 0; i < str.length; i++) {
    var count = 0;
    if (commonStr.indexOf(str[i]) == -1) {
        for (var j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                count++;
            }
        }
        console.log(str[i] + " " + count);
    }
    commonStr += str[i];
}
