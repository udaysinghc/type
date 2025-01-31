let names:string[]=["Sumit","Kumar","Sahu","Amit","Rajat","Rahul"]
console.log(names[1])
names.push("Raj")  //It will add the element at the end of the array
console.log("After adding the element- "+names)
names.pop() //It will remove the element from the end of the array

names.unshift("Raj")  //It will add the element at the start of the array





// using generic-
let empName:Array<string>=["john","smith","scott","miller"]
let empID:Array<number>=[101,102,103,104]
console.log(empName[1])
console.log(empID[2])

let empInfo:Array<any>=[12,"sumit",true, null]
console.log(empInfo[0])

 let empInfo1:(string|number)[]=["sumit",12,"sahu"]
 let val:Array<string|boolean>=["amit",false]

 let empinfo2:Array<string>;
 empinfo2=["sumit","kumar","sahu"]  //Array of string type data

 let empInfo3:Array<string>=["john","smith","scott","miller"]

 //Iteration of array:-

//  1. Using index based for loop:-
    for(let i=0;i<empInfo3.length;i++)
    {
        console.log(empInfo3[i])
    }

// 2. Using for in loop:-
for(let e in empInfo3)
    {
        console.log(e)  //It will print the index of the array
        console.log(empInfo3[e])  //It will print the value of the array    
    } 
    
// 3. Using for of loop:-
for(let e of empInfo3)
{
    console.log(e)   //It will print the value of the array
}    

// 4. Using forEach loop:-
empInfo3.forEach((e)=>{console.log(e)}) //It will print the value of the array

 