var stre = "aaabbbccd";
var unique = "";
for (var i = 0; i < stre.length; i++) {
    var ch = stre[i];
    var count = 1;
    for (var j = i + 1; j < stre.length; j++) {
        var ch1 = stre[j];
        if (ch == ch1) {
            count++;
        }
    }
    if (count == 1) {
        unique += ch;
    }
}
console.log(unique);
