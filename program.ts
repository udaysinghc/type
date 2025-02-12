// Basic TypeScript program demonstrating types, interfaces, and classes

// Interface definition
interface Person {
    name: string;
    age: number;
    email?: string;  // Optional property
}

// Class implementation
class Employee implements Person {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        private salary: number
    ) {}

    // Method to get employee info
    getInfo(): string {
        return `${this.name} is ${this.age} years old and can be reached at ${this.email}`;
    }

    // Method to calculate annual salary
    getAnnualSalary(): number {
        return this.salary * 12;
    }
}

// Function with type annotations
function createGreeting(person: Person): string {
    return `Hello, ${person.name}! `;
}

// Example usage
const john = new Employee("John Doe", 30, "john@example.com", 5000);
console.log(createGreeting(john));
console.log(john.getInfo());
console.log(`Annual salary: $${john.getAnnualSalary()}`);

// Array with type annotation
const numbers: number[] = [1, 2, 3, 4, 5];

// Generic function
function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(reverseArray(numbers));