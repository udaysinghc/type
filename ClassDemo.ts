class Employee {
    empid: number
    empName: string
    empCity: string
    empDept: string

    constructor(empid: number, empName: string, empCity: string, empDept: string) {
        this.empid = empid
        this.empName = empName
        this.empCity = empCity
        this.empDept = empDept
    }

    private logEmployeeInfo(): void {
        console.log(`Employee ID: ${this.empid}`)
        console.log(`Name: ${this.empName}`)
        console.log(`City: ${this.empCity}`)
        console.log(`Department: ${this.empDept}`)
    }

    display(): void {
        this.logEmployeeInfo()
    }

    displayMessage(): string {
        this.logEmployeeInfo()
        return "This is all the info of this employee"
    }
}

let obj = new Employee(101, "john", "indore", "testing")
obj.display()
console.log(obj.displayMessage())