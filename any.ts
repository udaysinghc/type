let arr: any[] = ["sumit", 12, true, null, undefined]
arr.push(["price", 120])
console.log(arr)

function info(a: number, b: number): string {
    let sum = a + b
    return `The sum of two numbers is ${sum}`  // This line returns the value.
}

console.log(info(20, 40))   // This line prints the value.