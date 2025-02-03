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