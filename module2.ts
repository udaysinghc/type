import { Hello, myFunction, varName } from "./module1"

// Print the variable present in module1
console.log(varName)

// Call the function from module1
myFunction

// Create a object for the class present in module1 file.
let c1=new Hello(12,2)
console.log(c1.addition())
console.log(c1.division())
console.log(c1.multiple())