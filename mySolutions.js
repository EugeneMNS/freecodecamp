// first comment
/* second comment */

var myName;

// Setup
var a;
a = 7;
// Only change code below this line

// Setup
var a;
a = 7;
var b;
b=a;
// Only change code below this line

var a = 9

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!"; 

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a +=12;
b +=9;
c +=7;

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -=6;
b -=15;
c -=1;

var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *=  5;
b *=  3;
c *=  10;

var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /=  12;
b /=  4;
c /=  11;

const myFirstName ="Bosch"
const myLastName = "Roberto"

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
var myStr = "This is the start. " + "This is the end."; // Change this line
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."
// Only change code below this line
var myName = "Roberto";
var myStr = "My name" + myName + "and I am well!";

var someAdjective = "Bob";
var myStr = "Learning to code is ";
myStr += someAdjective

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = myNoun + " "  + myVerb + " " + myAdjective + " " + myAdverb + " " + "Bad boy"; // Change this line
// Only change code above this line

var myArray = ["string", 6];

var myArray = [['first'], ['second']];

var myArray = [50,60,70];
let myData = myArray[0];

// Setup
var myArray = [18,64,99];

// Only change code below this line
myArray[0] = [45];

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push (["dog", 3]);

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

let removedFromMyArray = myArray.pop();

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

let removedFromMyArray = myArray.shift();

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

const myList = [["Milk", 1], ["Tomato", 5], ['Apple', 8], ["Tea", 1], ["Coffee", 3]];

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction ();

function functionWithArgs(num1, num2){
  console.log(num1 + num2);
}
functionWithArgs(7, 9);

function timesFive(num){
  return num * 5
};

// Declare the myGlobal variable below this line
let myGlobal =10

function fun1() {
  // Assign 5 to oopsGlobal Here
 oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
  // Only change code below this line
let myVar = "Hello"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = "sweater" 
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5
}

// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue){
  return "Yes, that was true"
}

return "No, that was false"


  // Only change code above this line

}

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Setup
function testStrict(val) {
  if (val ===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
// Setup
function testNotEqual(val) {
  if (val !=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Setup
function testStrictNotEqual(val) {
  if (val !==17 ) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
function testGreaterOrEqual(val) {
  if (val >=20) {  // Change this line
    return "20 or Over";
  }

  if (val >=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

 function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

function testLessOrEqual(val) {
  if (val <=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >=25) {
      return "Yes";
    }
  

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
else{
  return "Between 5 and 10";
}
}
testElseIf(7);

function orderMyLogic(val) {
    if (val < 5) {
    return "Less than 5";
 }else if (val < 10) {
    return "Less than 10";
} else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

function testSize(num) {
  // Only change code below this line
if (num<5){
  return "Tiny"
} else if (num<10){
  return "Small"
}else if (num<15){
  return "Medium"
}else if (num<20){
  return "Large"
}else if (num>=20){
  return "Huge"
}
  return "Change Me";
  // Only change code above this line
}
testSize(7);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) return "Hole-in-one!";

  else if ((strokes - par) <= -2) return 'Eagle';

  else if ((strokes - par) === -1) return 'Birdie';

  else if (strokes === par) return 'Par';

  else if ((strokes - par) === 1) return 'Bogey';

  else if ((strokes - par) === 2) return 'Double Bogey';

  return "Go Home!";
  // Only change code above this line
}

golfScore(5, 4);

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line

switch (val) {
  case 1: answer = "alpha";
  break;
  case 2: answer="beta";
  break;
  case 3: answer="gamma";
  break;
  case 4: answer="delta";
  break;
}



  // Only change code above this line
  return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case "a" : answer = "apple"; break;
  case "b" : answer = "bird"; break;
  case "c" : answer = "cat"; break;
  default: answer = "stuff";

}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case 1:
  case 2:
  case 3:
 answer = "Low";
 break;
 case 4:
 case 5:
 case 6:
 answer = "Mid";
 break;
 case 7:
 case 8:
 case 9:
 answer = "High";
 break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

 /* if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  } */
 switch (val){
   case "bob": answer = "Marley"; break;
   case 42: answer = "The Answer"; break;
   case 1: answer = "There is no #1"; break;
   case 99: answer = "Missed me by this much!"; break;
   case 7: answer = "Ate Nine"; break;
 }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

function isLess(a, b) {
  // Only change code below this line
  return (a < b) 

  // Only change code above this line
}

isLess(10, 15);

// Setup
function abTest(a, b) {
  // Only change code below this line
 if (a < 0 || b < 0) return undefined;


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

let count = 0;

function cc(card) {
  // Only change code below this line

  var msg = '';

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count === 5) msg = "5 Bet";
  else if (count === 0) msg = "0 Hold";
  else if (count === -5) msg = "-5 Hold";
  else if (count === -1) msg = "-1 Hold";
  else if (count === 1) msg = "1 Bet";


  return msg;

  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

const myDog = {
  // Only change code below this line
"name": "Jack",
"legs": 40,
"tails": 30,
"friends": ["Dof", "Katty"]


  // Only change code above this line
};

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};


// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line
