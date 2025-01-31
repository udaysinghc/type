let myDay:string="Saturday"

switch (myDay) {
    case "Sunday":
        console.log("Its sunday today")
        break;
    case "Monday":
        console.log("Its monday today")
        break;
    case "Tuesday":
        console.log("Its Tuesday today")
        break; 
    case "Wednesday":
        console.log("Its wednesday today")
        break;
    case "Thursday":
        console.log("Its thursday today")
        break;
    case "friday":
        console.log('Its friday today')
        break;
    case "Saturday":
        console.log("Its saturday today")    
        break;
    default:
        console.log("Please enter the correct day")
        break;
}

// Switch Cases with Enum:-

enum Browser{
    FIREFOX="firefox",
    CHROME="chrome",
    EDGE="edge",
    SAFARI="safari",
    OPERA="opera",
    BRAVE="brave",
    VIVALDI="vivaldi",
    TOR="tor"
}

let browserName:string=Browser.EDGE

switch (browserName) {
    case Browser.FIREFOX:
        console.log("You are using Firefox");
        break;
    case Browser.CHROME:
        console.log("You are using Chrome");
        break;
    case Browser.EDGE:
        console.log("You are using Edge");
        break;
    case Browser.SAFARI:
        console.log("You are using Safari");
        break;
    case Browser.OPERA:
        console.log("You are using Opera");
        break;
    case Browser.BRAVE:
        console.log("You are using Brave");
        break;
    case Browser.VIVALDI:
        console.log("You are using Vivaldi");
        break;
    case Browser.TOR:
        console.log("You are using Tor Browser");
        break;
    default:
        console.log("Unknown browser");
        break;
     
}



import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter month number (1-12): ', (input) => {
    const month: number = parseInt(input);

    // Using switch case to determine days in month
    switch(month) {
    case 1:  // January
    case 3:  // March
    case 5:  // May
    case 7:  // July
    case 8:  // August
    case 10: // October
    case 12: // December
        console.log("Number of days: 31");
        break;
        
    case 4:  // April
    case 6:  // June
    case 9:  // September
    case 11: // November
        console.log("Number of days: 30");
        break;
    case 2:  // February
        console.log("Number of days: 28 or 29 (leap year)");
        break;
    default:
        console.log("Invalid month number. Please enter a number between 1 and 12.");
        break;
    }
    rl.close();
});


