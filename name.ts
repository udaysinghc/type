let username: string="john"  // Type Annotation
//username=10  //Error: Type '10' is not assignable to type 'string'

let age=20  // Type Inference --Compile Time(CT) Type Checking
// age="Sumit" //Error: Type 'Sumit' is not assignable to type 'number'

let isActive: boolean=true     //It was boolean type data

let value:null= null           //It was null type data

let num:any                // It was any type data "any type of data can be stored insdie this num"
num=100
num="Sumit"
num=true
console.log(num)

let array:number[]=[10,20,30,40,50]   // It was array of number type data

let array1:Array<number>=[50,20,41,80,60]

console.log(array[0])
console.log(array1[1])
console.log(array1[2])

// void--It was a function return type, void means it was returning nothing from function.

function demo():void{     //return type is void   (Compile Time(CT) Type Checking)
    console.log("Hello")
   // return 121  //Error: Type '121' is not assignable to type 'void'
}
  
function demo1():number{   //return type is number   (Compile Time(CT) Type Checking)
    return 123              // return was the last statement of the function
    return 231        // Unreachable code;
}

function demo2():string{    //return type is string  (Compile Time(CT) Type Checking)
    return "amit"
}

demo()
console.log(demo1())
console.log(demo2())


function parameters(a,b)  //Write now the type of a and b is any
{
    return a+b     
}

parameters("sumit","sahu")   

function parameters1(a: number, b:number)
{
    return a+b
}

parameters1(10,20)
