function calculator(a:number, b:number)
{
    let sum=a+b
    let mul=a*b
    let div=a/b
    let rem=a%b

    return {sum, mul, div, rem}
}

console.log(calculator(10,6))


// Function Expression (Anonymous):-
const greet=function(message:string):string
{

    return `Good Morning ${message}`
}
greet("amit")

// Arrow Function:-

const multiply=(a: number, b:number):number => a*b
console.log(multiply(5,10))

function divide(a: number, b: number): number {
    return a / b;
}
console.log(divide(10, 2));

function subtract(a: number, b: number): number {
    return a - b;
}
console.log(subtract(10, 5));

// Optional Parameters:-

function optional(name:string, num?:number)
{
    return `Hello ${name}, how can i help you and i will connect you at ${num}`

}

console.log(optional("sumit"))
console.log(optional("amit", 8))

// Default parameters:-

function def(browserName:string="chrome")
{
    console.log("I will launch the "+browserName+" browser.")

}
def()
def("edge")

//  Rest Parameters (...args):-

function multi(...numbers:number[])
{
    return numbers.reduce((total,num)=>total+num,0)
}
console.log(multi(1,3,4,5))

// Function overloading:-
//  Type script provide the concept of function overloading.
//  You can have multiple function-
// 1. With the same name.
// 2. but different parameters type and return type.
// 3. However, the number of parameters should be SVGMaskElement.


// provide the functionality of the function/prototype of the function:-
function add(a:string,b:string):string;
function add(a: number, b: number): number;

// need to implementate with function body this only once:-
function add(a:any,b:any)
{
    return a+b

}
console.log(add(12,32))
console.log(add("java","script"))
console.log(121,"11 squareroot")