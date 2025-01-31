let arr5: string[]=["java","Python","C++","ruby","C","C#","Cobol","Crystal","Clojure"]
// arr5.filter(word => word.startsWith('C') || word.startsWith('P') || word.startsWith('j') || word.startsWith('r'))
//    .map(word => {
//       if (word.startsWith('C')) {
//          console.log("Word starting with 'C':", word);
//       } else if (word.startsWith('P')) {
//          console.log("Word starting with 'P':", word);
//       } else if (word.startsWith('j')) {
//          console.log("Word starting with 'j':", word);
//       } else if (word.startsWith('r')) {
//          console.log("Word starting with 'r':", word);
//       }
    
//    });

   // For loops- 

   for(let i=0; i<arr5.length; i++)
   {
      console.log(arr5[i]);
   }

   

// Existing constants and interfaces
const API_URL = 'http://localhost:8080/api/tasks';

interface Task {
    id: number;
    text: string;
}

let tasks: Task[] = [];

// Add new function to find max in array
function findMaxInArray(numbers: number[]): number {
    // Handle empty array case
    if (numbers.length === 0) {
        throw new Error('Array is empty');
    }
    // Using Math.max with spread operator
    return Math.max(...numbers);
}

// Existing functions remain the same
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        tasks = await response.json();
        renderTasks();
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

async function addTask() {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const text = taskInput.value.trim();

    if (text) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: Date.now(), text }),
            });
            const newTask = await response.json();
            tasks.push(newTask);
            taskInput.value = '';
            renderTasks();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }
}

async function deleteTask(id: number) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    if (taskList) {
        taskList.innerHTML = tasks.map(task => `
            <li class="task-item">
                <span>${task.text}</span>
                <button onclick="deleteTask(${task.id})" class="delete-button">Delete</button>
            </li>
        `).join('');
    }
}

// Example usage of findMaxInArray
function example() {
    const numbers = [1, 5, 3, 9, 2, 6];
    console.log('Max number:', findMaxInArray(numbers)); // Output: 9
}

// Initial load
fetchTasks();

