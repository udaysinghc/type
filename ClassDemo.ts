class Employee{

    empid:number
    empName:string
    empCity:string
    empDept:string

    constructor(empid:number, empName:string, empCity:string, empDept:string)
    {
        this.empid=empid
        this.empName=empName
        this.empCity=empCity
        this.empDept=empDept
    }
    
    display():void{
        console.log(this.empid)
        console.log(this.empName)
        console.log(this.empCity)
        console.log(this.empDept)
    }

    displayMessage():string{
        console.log(this.empid)
        console.log(this.empName)
        console.log(this.empCity)
        console.log(this.empDept)
        return "This is all the info of this employee"
    }
}

let obj=new Employee(101,"john","indore","testing")
obj.display()
console.log(obj.displayMessage())