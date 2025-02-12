let flag:boolean =true
if(flag)
{
    console.log("flag is true")
}
else{
    console.log("flag is false")
}

let number1:number=45
let number2:number=50
if(number1>number2)
{
    console.log("number1 is greatest")
}
else{
    console.log("number2 is greatest")
}

// if else-if
// Find the largest among three numbers:-
let a:number=200, b:number=40, c:number=35
if(a>b && a>c)
{
    console.log(`${a} is the greatest`)
}
else if(b>c)
{
    console.log(`${b} is greatest`)
}
else
{
    console.log(`${c} is greatest`)
}

// Ternary operator:-
let i:number=25
let j:number=100

i>j ? console.log(`${i} is greatest`) : console.log(`${j} is greatest`)

// Switch statement example
let day: number = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// Nested if-else example
let age: number = 18;
let hasLicense: boolean = true;

if(age >= 18) {
    if(hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You need to get a license first");
    }
} else {
    console.log("You must be 18 or older to drive");
}

// Multiple conditions example
let score: number = 85;
let attendance: number = 75;

if(score >= 80 && attendance >= 70) {
    console.log("Excellent performance!");
} else if(score >= 60 && attendance >= 60) {
    console.log("Good performance");
} else {
    console.log("Need improvement");
}

// Grade calculator example
let marks: number = 78;
let grade: string;

if(marks >= 90) {
    grade = 'A';
} else if(marks >= 80) {
    grade = 'B';
} else if(marks >= 70) {
    grade = 'C';
} else if(marks >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log(`Student grade: ${grade}`);

// Complex ternary operator example
let num: number = 0;
let message: string = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(message);