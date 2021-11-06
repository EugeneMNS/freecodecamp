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
