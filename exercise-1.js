// ***For all the exercises, be sure to log the output of the function to the console.***

/************************************************************************************/
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
console.log("TEKcamp>>>>>>>>>>");

function tekCamp() {
  var no = 100;
  // loop for 100 times
  for (var i = 1; i <= no; i++) {
    // number divisible by 15(divisible by
    // both 3 & 5), print 'TEKcamp' in
    // place of the number
    if (i % 15 == 0) console.log("TEKcamp" + " ");
    // number divisible by 5, print 'camp'
    // in place of the number
    else if (i % 5 == 0) console.log("camp" + " ");
    // number divisible by 3, print 'TEK'
    // in place of the number
    else if (i % 3 == 0) console.log("TEK" + " ");
    // print the numbers
    else console.log(i + " ");
  }
}

tekCamp();

/************************************************************************************/
//Write a function that converts the current temperature from Fahrenheit to Celsius.

//your code...
function farenheitCelsius(fahrenheit) {
  var fToCel = ((fahrenheit - 32) * 5) / 9;
  var convertedFTemp = fahrenheit + "\xB0F is " + fToCel + "\xB0C.";
  console.log(convertedFTemp);
}
farenheitCelsius(41.0);

/************************************************************************************/
//Write a function that converts the Celsius temperature back to Fahrenheit.

//your code...
function celsiusFarenheit(celsius) {
  var cToFahr = (celsius * 9) / 5 + 32;
  var convertedCTemp = celsius + "\xB0C is " + cToFahr + " \xB0F.";
  console.log(convertedCTemp);
}
celsiusFarenheit(37.7778);
/************************************************************************************/
// Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

//your code...
function canVote(age) {
  if (age <= 21) return false;
  else {
    return true;
  }
}

var oldEnough = canVote(40);
if (oldEnough) {
  console.log("Yes You can vote");
} else {
  console.log("No..You can't vote");
}
console.log(oldEnough);

/************************************************************************************/
// Write a function that converts a string to an array. It should return an array.

//your code...
function strToArr() {
  var stringToConvert = "ANU";
  //   var convertedArry = [...stringToConvert];
  //   console.log(convertedArry);
  return [...stringToConvert];
}
//strToArr();
console.log(strToArr());
/************************************************************************************/
// Write a function that reverses your telephone number.  It should return the reversed telephone number.

//your code...
function reversePhone(number) {
  // Use toString() to convert it into a String
  // Use the split() method to return a new array
  // Use the reverse() method to reverse the new created array
  // Use the join() method to join all elements of the array into a string
  // parseInt() function parses a string argument and returns an integer
  const reversedNumber = number.toString().split("").reverse().join("");
  return parseInt(reversedNumber);
}
console.log(reversePhone(7779722414));
/************************************************************************************/
// Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

//your code...
var myCar = new Object();
myCar.make = "Toyota";
myCar.model = "Camry";
myCar.color = "Green";
myCar.year = 2005;

console.log(myCar);

/************************************************************************************/
// Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

//example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

//your code...
function evenOdd(arr) {
  var evenOddObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      //console.log(arr[i] + " : " + "even");
      evenOddObj[arr[i]] = "even";
    } else {
      //console.log(arr[i] + " : " + "odd");
      evenOddObj[arr[i]] = "odd";
    }
  }
  return evenOddObj;
}
console.log(evenOdd([10, 23, 3, 4]));
/************************************************************************************/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

//your code...
for (let i = 0; i < numbers.length; i += 3) {
  console.log(numbers[i]);
}

/************************************************************************************/
const foodArray = [
  "potatoes",
  "tamales",
  "lemon",
  "strawberries",
  "chocolate",
  "pudding",
  { program: "TEKcamp" },
];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
foodArray[5] = "school";
console.log(foodArray[5]);

const adjectiveArray = [
  "salty",
  "spicy",
  "sour",
  "sweet",
  "rich",
  "creamy",
  "amazing",
];
// Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".

/************************************************************* */
// Refactor the for() loop to be a while loop.

for (let i = 0; i < 10; i++) {
  //console.log(" the value of i in the loop is : " + i);
}

//your code...
let i = 0;
while (i < 10) {
  console.log(" The value of i in the loop is : " + i);
  i++;
}

/************************************************************* */
//Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
function calc1() {
  console.log(30 + 2) * 20;
}
//console.log (calc1());
function calc2(product) {
  return (product / 10) ** 2;
}
console.log(calc2(calc1()));

/************************************************************* */
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values :

// ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

function testTruthyFalsy(val) {
  return val ? console.log("truthy") : console.log("Falsy");
}

function testTrueorFalse(val1) {
  if (val1) {
    console.log("truthy");
  } else {
    console.log("Falsy");
  }
}

testTrueorFalse(20);

testTruthyFalsy(20);
testTruthyFalsy(0);
testTruthyFalsy("zero");
const zero = 20;
testTruthyFalsy(zero);
testTruthyFalsy(null);
testTruthyFalsy("0");
testTruthyFalsy(!"");
testTruthyFalsy(125);
testTruthyFalsy({});
testTruthyFalsy(undefined);
testTruthyFalsy("");
testTruthyFalsy(() => {
  console.log("hello TEKcamp!");
});

/************************************************************* */
// Refactor the following code using a switch statement:

const day = "friday";

if (day === "monday") {
  console.log("we got a long week ahead of us...");
} else if (day === "tuesday") {
  console.log(
    "tuesday's are still beterr than mondays, but LONG way to go still"
  );
} else if (day === "wednesday") {
  console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
  console.log("Thursday night... the mood is right");
} else if (day === "friday") {
  console.log("TGIF.  Friday truly is the best day of the week!");
} else {
  console.log("It's a weekend!");
}

//==========================================================

const day = "friday";
switch (day) {
  case "monday":
    console.log("we got a long week ahead of us...");
    break;

  case "tuesday":
    console.log(
      "tuesday's are still beterr than mondays, but LONG way to go still"
    );
    break;

  case "wednesday":
    console.log("We are smack dab in the middle of the week");
    break;

  case "thursday":
    console.log("Thursday night... the mood is right");
    break;

  case "friday":
    console.log("TGIF.  Friday truly is the best day of the week!");
    break;

  default:
    console.log("It's a weekend!");
}

/************************************************************* */
// Refactor the following statements to use ternary expressions:

const age = 10;
if (age > 21) console.log("adult");
else {
  console.log("minor");
}

if (age > 13 && age < 19) console.log("teen");
else {
  console.log("not a teenager");
}

if (age > 65) console.log("retired");
else {
  console.log("still working...");
}
//==============================================
const age = 10;
console.log(age > 21 ? "adult" : "minor");
console.log(age > 13 && age < 19 ? "teen" : "not a teenager");
console.log(age > 65 ? "retired" : "still working");

/************************************************************* */
//Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
/*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

//your code...
var person = {
  name: "Anuradha",
  age: 40,
  gender: "female",
  healthy: "Yes",
  hobbies: ["cooking", "learning"],
  profession: "Intership",
  education: "MBA",
  learn: function () {
    console.log(this.name + " is learning JavaScript.");
  },
  passion: function () {
    return "I love " + this.hobbies[0] + ".";
  },
};
person.learn();
console.log(person.passion());
/************************************************************* */

{
  const year = 2021;
  const nums = [1, 2, 3, 4, 5];
  let sum = 0;
  let i = 0;
  const doubled = [];

  //Refactor the following statements into expressions

  // 1.
  //if (year > 2000 && year < 2100) {
  //  console.log("welcome to the 21st century");
  //}

  year > 2000 && year < 2100 ? console.log("welcome to the 21st century") : "";

  // 2.
  //   for (let i = 0; i < nums.length; i++) {
  //     sum += nums[i];
  //   }
  //   console.log(sum);

  console.log(nums.reduce((a, b) => a + b, 0));

  // 3.
  //   while (i < nums.length) {
  //     doubled.push(nums[i] * 2);
  //     i++;
  //   }

  //   console.log(doubled);
  nums.forEach((x) => doubled.push(x * 2));
  console.log(doubled);
}

/************************************************************* */
// Use array methods to solve the following problems.

const nums = [1, 2, 3, 4, 5];
// Square every number in the array.  Store the squares in a new array.

//your code...
function squareArr(nums) {
  newArr = [];

  for (var i = 0, len = nums.length; i < len; i++) {
    //newArr = Math.sqrt(nums[i]);
    newArr.push(nums[i] * nums[i]);
  }

  return newArr;
}

console.log(nums);
console.log(squareArr(nums));

const fivePlus = [
  1,
  3,
  5,
  7,
  9,
  1,
  3,
  5,
  2,
  3,
  1,
  23,
  4,
  232,
  3,
  4,
  1,
  2,
  2,
  2,
  3,
  4,
  4,
  1,
  12,
  11,
  23,
  3,
  4,
  5,
];
//Remove all numbers that are less than 5.  Store the results in a new array.

//your code...
var newArray = new Array();
fivePlus.forEach(function (number) {
  if (number > 5) {
    newArray.push(number);
  }
});
console.log(newArray);
// Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

//your code...
console.log(Array.from({ length: 20 }, () => Math.floor(Math.random() * 20)));

const showNums = [12, 22, 33, 44, 55, 66, 77, 88, 99, 101];
//Print out the value of each number divided by 2.  There is no need to store the output in an array.
showNums.forEach((x) => console.log(x / 2));

/************************************************************* */
/* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */

let chessPieces = [
  "king",
  "queen",
  "pawn",
  "pawn",
  "pawn",
  "bishop",
  "police",
  "iphone",
  "thief",
];

function chessCalc(pieces) {
  //your code here
  let points = 0;
  for (let i = 0; i < pieces.length; i++) {
    switch (pieces[i]) {
      case "pawn":
        points++;
        break;
      case "rook":
        points += 5;
        break;
      case "bishop":
        points += 3;
        break;
      case "knight":
        points += 3;
        break;
      case "queen":
        points += 9;
        break;
      default:
        break;
    }
  }
  return points;
}
console.log(chessCalc(chessPieces));

/************************************************************* */

const ones = [
  1,
  11,
  111,
  1111,
  11111,
  111111,
  1111111,
  11111111,
  111111111,
  1111111111,
];
//reverse the array, without modifying / `mutating` the ones array.

// const revArray = [];
// for (let i = ones.length; i >= 0; i--) {
//   revArray.push(ones[i]);
// }
// console.log(revArray);

ones.reverse();
console.log(ones);

/************************************************************* */
//create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

function performer(cb) {
  //code goes here
  console.log("This is " + cb);
}

function userInput(callback) {
  var cb = "CALL BACK Function";
  callback(cb);
}

userInput(performer);

/************************************************************* */
// For the given list of developers :
const devs = [
  {
    name: "Cameron",
    age: 23,
    gender: "m",
    tech_stack: ["html", "css", "js", "React"],
  },
  {
    name: "Liz",
    age: 20,
    gender: "f",
    tech_stack: ["java", "spring-boot", "MySql"],
  },
  {
    name: "Chris",
    age: 102,
    gender: "m",
    tech_stack: ["react", "express", "python"],
  },
  {
    name: "Rashid",
    age: 27,
    gender: "m",
    tech_stack: ["thymeleaf", "postgres", "js", "Angular"],
  },
  {
    name: "Annie",
    age: 30,
    gender: "F",
    tech_stack: ["html", "scss", "less", "DynamoDB", "GraphQL"],
  },
  {
    name: "Dr. Patel",
    age: 52,
    gender: "M",
    tech_stack: null,
  },
  {
    name: "Isaiah",
    age: 48,
    gender: "M",
    tech_stack: ["Java", "", "less", "DynamoDB", "GraphQL"],
  },
  {
    name: "Saima",
    age: 33,
    gender: "F",
    tech_stack: ["MongoDB", "Route53", "Jenkins", "Terraform", "Kubernetes"],
  },
  {
    name: "Omar",
    age: 33,
    gender: "m",
    tech_stack: ["c++"],
  },
  {
    name: "Mariam",
    age: 32,
    gender: "f",
    tech_stack: null,
  },
];

/************************** */
// Find all devs older than 24

//your code here...
let oldDev = [];
for (let i = 0; i < devs.length; i++) {
  devs[i].age > 24 ? oldDev.push(devs[i]) : "";
}
console.log(oldDev);
/************************** */
// Remove all people who are not developers (i.e. no tech stack)

//your code here...
let nonDev = devs.filter((i) => i.tech_stack !== null);

console.log("Developers are ", nonDev);

/************************** */
// Calculate the total age of all the devs

//your code here...
let sumAge = devs.reduce((x, y) => x + y.age, 0);
console.log("Total age of all the developers are ", sumAge);
/************************** */
// Find all female devs

//your code here...
let femaleDevs = devs.filter((f) => f.gender.toLowerCase() === "f");
console.log("Female devs ", femaleDevs);
/************************** */
// lowercase the genders of every dev

//your code here...
let lowerCase = devs.filter((l) => l.gender.toLowerCase());
console.log("Lower case of genders of every dev ", lowerCase);
/************************** */
// Sort the developers by name

//your code here
const nameDevSort = devs.sort(function (a, b) {
} // still working on this part

// console.log(nameDevSort);
/************************** */
// Sort the devs by age in descending order

//your code here

function ageSort(obj) {
    var devAge = obj.sort(function()){

    }
}// pending

/************************** */
// Sort the male coders by age

//your code here

let maleDevs = [];
for (let i = 0; i < devs.length; i++) {
  if (devs[i].gender == "m") {
    maleDevs.push(devs[i]);
  }
}
console.log(ageSort(maleDevs)); // debugging in process

/************************** */
// For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below :

/*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

//your code here
devs.forEach((dev) => {
    (!dev.tech_stack) ? console.log(dev.name + " is not a developer.") : console.log(dev.name + " specializes in " + dev.tech_stack);
    });

/************************************************************* */
// Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.
const numbersMixed = [
  2,
  23,
  1,
  2,
  1,
  1,
  1,
  2,
  2.5,
  20,
  200,
  2000,
  ,
  { k: "val" },
  20000,
  19999,
  1878,
  140,
  23,
  4,
  "sk",
  true,
  true,
  "true-dat",
  "nice",
  "one",
  "two",
  "three",
  "3",
  "tea",
  [],
];

function maxNumber(numbers) {
  //your code...
  if (toString.call(numbers) !== "[object Array]") return false;
  return Math.max.apply(null, numbers);
}
console.log(maxNumber([numbersMixed])); // not done yet 
//After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

function sortNums(numbers, desc = false) {
  //your code...
}

/************************************************************* */
//Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

//your code...

//Instead of using the single or double quotes, a template literal uses backticks as shown
let str = `Template literal in ES6`;

console.log(str); // Template literal in ES6
console.log(str.length); // 23
console.log(typeof str); // string

//New way to srite Strings and concatenate the same
var name = "Chipotle";
var place = "restaurant";

console.log(`${name} is one of my favourite ${place}!!!`);

/************************************************************* */
//Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
//mapObj.set({ company: "TEKsystems" }, "object");

const keyObject = {
  company: "TEK Systems",
};
mapObj.set(keyObject, "object");
mapObj.set(20, "int");
mapObj.set("Party", "String");
mapObj.set([50, 60, 70], "array");
mapObj.set(false, "boolean");
console.log(mapObj);
console.log(mapObj.has({ company: "TEKsystems" }));

//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

//your code...
console.log(
  "this line of code prints false because objects need to be stored in objects."
);

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
var objArr = [];

var seq = mapObj.values();
for (let i = 0; i < mapObj.size; i++) {
  objArr.push(seq.next().value);
}

console.log(objArr); // still working not done yety
/************************************************************* */
//Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

// ex : 2,3 => doMath(2,3) => adding : 5

function doMath(x, y) {
  let calc = Math.floor(Math.random() * operations.length);
  console.log(operations[calc]);
  return operations[calc](x, y);
}

//your code...
const add = (x, y) => x + y;
const subract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operations = [add, subract, multiply, divide];

console.log(doMath(2, 3));
/************************************************************* */
//- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...
let hof = function multiple(x) {
  return function fn(y) {
    return x * y;
  };
};
console.log(hof(10)(20));
console.log(hof(hof(10)(20))(5)); //first value of hof gets entered into x, then gets multiplied by y

//- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

//your code
var stockGain = (basis) => {
  let message = " is how much the stock has increased";
  let innerFn = (yrs) => {
    var r = 1.25;
    return r ** yrs;
  };
  console.log(basis * innerFn(5) - basis + message);
  return basis * innerFn(5);
};

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.

//your code...
var futureValue = stockGain(10);
console.log("Future Value is ", futureValue);

// DO NOT DELETE THIS EXPORT
module.exports = {
  tekCamp,
  canVote,
};

//*************************************** */
