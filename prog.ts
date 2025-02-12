// Interface for a Person
interface Person {
    name: string;
    age: number;
    greet(): void;
}

// Class implementing the Person interface
class Student implements Person {
    constructor(
        public name: string, 
        public age: number, 
        private studentId: number
    ) {}

    // Method to greet
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }

    // Method specific to Student
    study(): void {
        console.log(`${this.name} is studying hard!`);
    }
}

// Function to create and interact with students
function createAndInteractWithStudents(): void {
    // Create an array of students
    const students: Student[] = [
        new Student("Alice", 20, 1001),
        new Student("Bob", 22, 1002),
        new Student("Charlie", 21, 1003)
    ];

    // Demonstrate polymorphic behavior
    students.forEach(student => {
        student.greet();
        student.study();
    });
}

// Generic function to find the maximum value in an array
function findMax<T extends number | string>(arr: T[]): T | undefined {
    if (arr.length === 0) return undefined;
    return arr.reduce((max, current) => 
        current > max ? current : max
    );
}

// Main execution
function main(): void {
    console.log("TypeScript Demo Program");
    
    // Create and interact with students
    createAndInteractWithStudents();

    // Demonstrate generic function
    const numbers = [5, 2, 8, 1, 9];
    const maxNumber = findMax(numbers);
    console.log("Maximum number:", maxNumber);

    const strings = ["apple", "banana", "cherry"];
    const maxString = findMax(strings);
    console.log("Maximum string:", maxString);
}

// Run the main function
main();