interface IEmployee{
    empName:string;
    empID:number;
    empSalary:number;

    displayeData:()=>void
}

var emp1:IEmployee={
    empName:"jonh",
    empID:101,
    empSalary: 50000,
    displayeData: function() {
        console.log(`Name: ${this.empName}, ID: ${this.empID}, Salary: ${this.empSalary}`);
    }
}

let emp2:IEmployee={
    empName: "doe",
    empID: 102,
    empSalary: 60000,
    displayeData: function() {
        console.log(`Name: ${this.empName}, ID: ${this.empID}, Salary: ${this.empSalary}`);
    }
}


emp1.displayeData()
emp2.displayeData()