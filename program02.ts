// remove the duplicate value:


let arr1:number[]=[10,14,9,8,15,20,4,4,12,14,32,11]
let removeDuplicat:number[]=[]
arr1.forEach(n=>{

    for(let j=0; j<arr1.length;j++)
    {
        if(arr1[j]>arr1[j+1])
        {
            let temp=arr1[j]
            arr1[j]=arr1[j+1]
            arr1[j+1]=temp
        }
    }

})


for(let i=0; i<arr1.length-1; i++)
{
    if(arr1[i]!=arr1[i+1])
    {
        removeDuplicat.push(arr1[i])
    }
}

console.log(removeDuplicat)


// Anagram string

let str1:string="java"
let str2:string="ajva"

if(str1.length != str2.length)
{
    console.log("Not an anagram function")
}

else
{
    let arr1:string[]=str1.split("")
    let arr2:string[]=str2.split("")

    arr1.sort()
    arr2.sort()
    let flag:boolean=true
    for(let i=0; i<arr1.length; i++)
    {
        if(arr1[i]!=arr2[i])
        {
            flag=false
            break;
        }
    }

    if(flag)
    {
        console.log("Anagram")

    }
    else
    {
        console.log("Not a Anagram")
    }
}


// Count the alp in string:

let str:string="aabbssacss"
let commonStr:string=""

for(let i=0; i<str.length; i++)
{
    let count:number=0
    if(commonStr.indexOf(str[i])==-1){
    for(let j=0; j<str.length; j++)
    {
        if(str[i]==str[j])
        {
            count++
        }
    }
    console.log(str[i]+" "+count)
}
    commonStr+=str[i]
}

