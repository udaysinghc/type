class LoopExamples {
    private arr: number[] = [15, 521, 141, 325, 58, 25, 26, 21, 11];
    private numbers: number[] = [1, 20, 300, 4000, 50000];
    private programs: string[] = ["java", "python", "C", "C++"];
    private greeting: string = "Good Afternoon";

    reverseArrayTraversal(): void {
        for (let i = this.arr.length - 1; i >= 0; i--) {
            console.log(this.arr[i]);
            if (this.arr[i] % 2 == 0) {
                break;
            }
        }
        console.log("Array traversal in reverse order completed.");
    }

    forOfLoopExample(): void {
        for (let num of this.numbers) {
            console.log(num);
        }
    }

    forInLoopExample(): void {
        for (let i in this.programs) {
            console.log(i);            // It will give the index of an element 
            console.log(this.programs[i]);   // It will give the element at the index
        }
    }

    findVowelsAndConsonants(): void {
        let vowel: string = "";
        let cons: string = "";
        for (let ch of this.greeting) {
            if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A") {
                vowel += ch + " ";
            } else {
                cons += ch + " ";
            }
        }
        console.log("Consonants:", cons);
        console.log("Vowels:", vowel);
    }
}

// Create an instance and call the methods
const loopExamples = new LoopExamples();
loopExamples.reverseArrayTraversal();
loopExamples.forOfLoopExample();
loopExamples.forInLoopExample();
loopExamples.findVowelsAndConsonants();