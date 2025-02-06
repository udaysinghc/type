// Access Modifier- access modifier control the visiblity of the class properties and method.

class StudentInfo{

    // Properties of the student:-
    public studentName:string           // Accessible from anywhere (default).
    protected studentClass:number       // Accessible within the class and its subclasses. 
    private studentID:number           // Accessible only within the class.
    readonly studentSurname:string     // Can be accessed but not modified after initialization

   constructor(studentName:string, studentClass:number, studentID:number, studentSurname:string)
   {
    this.studentName=studentName
    this.studentClass=studentClass
    this.studentID=studentID
    this.studentSurname=studentSurname
   }
   info():void
   {
    console.log(this.studentName)
    console.log(this.studentClass)
    console.log(this.studentID)
    console.log(this.studentSurname)
   }
} 
let student01=new StudentInfo("john", 2,101,"sam" )
console.log(student01.studentName)
console.log(student01.studentSurname)
// console.log(student01.studentID)         // it can be access with in the class
// console.log(student01.studentClass)      // it can be access with in the class and its subclass
// student01.studentSurname="sammer"          // it can not be modified as it is a readonly property
student01.info()