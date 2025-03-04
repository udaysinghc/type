// Reverse a string:-
function reverseString(str:string):string
{
    let revString=""
    for(let i=str.length-1; i>=0; i--)
    {
        revString+=str[i]

    }
    return revString;
    
}

console.log("The reverse string is: -"+ reverseString("hello"))

// Reverse a number:-

function revNumber(num:number):number
{
    let revNum:number=0
    while(num>0)
    {
        revNum=revNum*10+(num%10)
        num=Math.floor(num/10)

    }
    return revNum
}

console.log("The Rev Number is: "+revNumber(1254))

// Find Max in array:

function maxArray(num:number[]):number
{
    let max=num[0]
    num.forEach(num=>{
        if(num>max)
        {
            max=num
        }
    })
    return max
}

console.log(maxArray([12,25,34,6]))


// Find the missing number:

function missingNumber(num:number[],n:number):number
{
    let sumOfNaturalNumber=(n*(n+1))/2
    let arrSum=0

    num.forEach(ele=>{
        arrSum+=ele
    })

    let missingNumber=sumOfNaturalNumber-arrSum
    return missingNumber
}

let arr:number[]=[1,2,3,4,6]
let n:number=6
console.log("The missing number is:- "+missingNumber(arr,n))


// Find second Larget element

function second(num:number[])
{
    let min=num[0]
    num.forEach(element => {
        if(element<min)
        {
            min=element
        }
    });

    let max:number=
}