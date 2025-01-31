// Union:- with the help of union we can store mutliple types.

let employeeID:(string | number)

employeeID="sumit@1234"
employeeID=54664
// employeeID=true  // Error :Type 'boolean' is not assignable to type 'string | number'

function getUserInfo(customerID:(string | number))
{
    if(typeof(customerID)==='number')
    {
        return customerID+"naveen"
    }
    else if(typeof(customerID)==='string')
    {
        return 'naveen_naveen'
    }
}

console.log(getUserInfo(9001))
console.log(getUserInfo("name"))
