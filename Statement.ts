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

