console.log("hello world!");

// Control Flows --> determines how programmes are executed basedo n conditions and iteration.

// conditionals --> if, else-if, else, ternary operator

if ("condition") {
  // code to execute if condition is met
}

let age = 30;
if (age === 25) {
  console.log("Age is greater than 25")
} else if (age < 25) {
  console.log("Age is lesser than 25")
} else{
  console.log("Age is 30")
}


// let isLoggedIn = true;

// if (!isLoggedIn) {
//   console.log("You are not logged in")
// }
// else{
//   console.log("You are logged in...")
// }

let balance = 500;
let withdrawalAmount = 1000;

if (withdrawalAmount > balance) {
  console.log("Insufficient amount")
} else if (withdrawalAmount == balance){
  console.log("Alajetan nio")
} else {
  console.log("Successful..Owo ti tan")
}
// else if (withdrawalAmount < balance){
//   console.log("Withdrawing")
// }

let votingAge = 18

if (votingAge >= 18){
  console.log("You are eligible to vote")
}else{
  console.log("you are not eligible, wait till your time")
}

let purchaseAmount = 100;
let discount;

if(purchaseAmount >= 250){
  discount = 10
}else if(purchaseAmount >=250){
  discount = 5
}else if (purchaseAmount = 100){
  discount = 1.5
}else{
  discount = 0
}
// console.log(discount)
console.log(`You  got a discount of ${discount}`)

// Ternary Operator
// condition ? expression_if_true : expression_if_false

let newAge = 18;
let message = age >= 18 ? "You are an adult!" : "You are a minor"
console.log(message);

let threshold = 40;
threshold >= 40 ? console.log ("Marry") : console.log ("You are still a minor");


const number = 9;
const result = number % 2 === 0 ? "even" : "odd"
console.log(result);

let temperature = 37;
const statusTemp = temperature > 37 ? "Hot weather 🥵" : "Cold weather❄️"
console.log(statusTemp);

// Ternary with expression
let price = 100;
let discount2 = true;
let finalPrice = discount2 ? price * 0.9 : price; // 10% off if discount applies
console.log(finalPrice); // 90



// Greeting
let isLoggedIn = true;
let name = "Alex";
let time = 14; // 2 PM

// Ternary (good for this)
// let light = isDarkMode ? "off" : "on";

// if-else (better for this)
// let isDarkMode = true;
// if (isDarkMode) {
//     console.log("Turning off lights...");
//     console.log("Activating night mode...");
// } else {
//     console.log("Turning on lights...");
//     console.log("Activating day mode...");
// }

let greeting = isLoggedIn 
    ? time < 12 
        ? `Good morning, ${name}!` 
        : `Good afternoon, ${name}!` 
    : "Please log in.";
console.log(greeting); // "Good afternoon, Alex!"


// Switch statement --> used when there are multiple possible value for a variable.

// example 1
let day = "Tuesday"

switch (day){
  case "Monday":
    console.log("Today is bright!");
    break;
  case "Friday": 
    console.log("Jimoh Oloyin")
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default: 
  console.log("It is a normal day!")
}

// example 2
let loginStatus = "logged_in";

switch (loginStatus) {
    case "logged_in":
        console.log("Welcome back!");
        break;
    case "logged_out":
        console.log("Please log in.");
        break;
    case "pending":
        console.log("Account approval in progress.");
        break;
    default:
        console.log("Unknown status—contact support.");
}

// using switch with numbers
let score = 85;

switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    default:
        console.log("D");
}

// with function 
function getTrafficLight(color) {
  switch (color) {
      case "red":
          return "Stop";
      case "yellow":
          return "Slow down";
      case "green":
          return "Go";
      default:
          return "Invalid color";
  }
}

console.log(getTrafficLight("green")); // "Go"
console.log(getTrafficLight("blue"));  // "Invalid color"

// mood checker with switch
let mood = "happy";

switch (mood) {
    case "happy":
        console.log("😊 Great to hear!");
        break;
    case "sad":
        console.log("😢 Cheer up!");
        break;
    case "angry":
        console.log("😡 Take a deep breath!");
        break;
    default:
        console.log("😐 How are you feeling?");
}

// using break to create intentional fall-through in switch 

let fruit = "apple";

switch (fruit) {
    case "apple":
    case "pear":
        console.log("It's a pome fruit!");
        break;
    case "banana":
    case "mango":
        console.log("It's a tropical fruit!");
        break;
    default:
        console.log("Unknown fruit.");
}

// switch for food ordering
let order = "pizza";

switch (order) {
  case "burger":
    console.log("This is burger");
    break;

  case "pizza":
    console.log("You ordered a pizza");
    break;
  
  case "Doughnut":
      console.log("You ordered a doughnut");
      break;
  default: 
  console.log ("Invalid order, Please select from the menu");
}

let dayNumber = 3;
let dayName;

switch (dayNumber){
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "not existing"
  }
  console.log(`Day ${dayNumber} is ${dayName}`)

// switch for detecting a user role

const role = "admin"

switch (role){
  case "admin":
    console.log("Welcome dear admin., you have full access...")
    break;
  case "editor": 
    console.log("You are not welcome")
    break;
  case "customer":
    console.log("Access denied")
    break;
  default:
    console.log ("Unknown role, contact support")
}

// LOOP
// Loop are used to execute a block of code multiple times.

for(let i = 0; i < 10; i++){
  console.log("iteration:", i)
  // note that the iteration we put in the console is optional
}

for (let i = 1; i <= 5; i++) {
  console.log("Lap " + i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i + "...");
}
console.log("Blast off!");

// using for loop to print a multiplication table

let table = 5;
for (let i = 1; i <=12; i++){
  console.log(`${table} * ${i} = ${table * i}`)
}

let i, x = '';
for (i = 0; i <=5; i++){
  console.log(x += i);
}
