class person{
    name:string
    surName:string
    constructor(name:string, surName:string)
    {
        this.name=name
        this.surName=surName
    }

    personInfo():void{
        console.log("The person name is :-"+this.name)
    }
}

class emp extends person{
    empID:number

    constructor(empID:number,name:string, surname:string)
    {
        super(name,surname)
        this.empID=empID
        this.name=name
    }

    employeeData():void {
        console.log("The Name of the employee is :-"+this.name)
        console.log("The empId is :-"+this.empID)
    }
}

let emp1=new emp(121,"john","cena")
console.log(emp1.empID)              
console.log(emp1.name)            // We can call the name properties as well which is present in parent class
console.log(emp1.surName)         // We can call the surname properties as well which is present in parent class
emp1.employeeData()
emp1.personInfo()

console.log("Now create the object for parent class that is person")
let per1=new person("mike", "tison")
per1.personInfo()
console.log(per1.name)
console.log(per1.surName)   
