// Tuple:- tuple is a fixed size array whose elements are of fixed types.

let numbers:[number, string]=[101,"sumit"]
let user:[number,string,boolean]=[1,"amit",true]
console.log(user[0])
console.log(numbers[1])
numbers.push("sahu")  
console.log(numbers)
numbers.push(103)
// numbers.push(true) //Error: Argument of type 'true' is not assignable to parameter of type 'string | number'

let data:[string,number][]=[["sumit",101],["amit",102],["rahul",103],]
console.log(data[0])
console.log(data[1][0])
// data.push("amit") //Error: Argument of type 'string' is not assignable to parameter of type '[string, number]'
data.push(["ravi",104])
console.log(data)
// data.push([121,"dsvs"])  //Error: Argument of type '[number, string]' is not assignable to parameter of type '[string, number]'

