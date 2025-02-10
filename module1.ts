// Variable:-
export let varName:string="kumar"

// Function:-
export function myFunction()
{
    console.log("This is my function")
}

//Class

export class Hello{

    a:number
    b:number

    constructor(a:number,b:number)
    {
        this.a=a
        this.b=b
    }

    addition=()=>{
        return `The sum of teo number is ${this.a+this.b}`
    }

    multiple=()=>{
        return this.a*this.b
    }

    division=()=>{
        return this.a/this.b
    }
}