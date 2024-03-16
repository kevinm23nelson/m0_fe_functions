// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// The includes() method is called on the string "Hello World"
// The argument is passed; includes function is to tell whether argument is included within the string.
// The return value is True


"Hello World".endsWith("Hello");
// The endsWith method is called on the string "Hellow World"
// The argument is passed; endsWith is to tell whether the string ends with the same characters in the argument.
// The return value is False.

"Hello World".endsWith("rld");
// The endsWith method is called on the string "Hellow World"
// The argument is passed; endsWith is to tell whether the string ends with the same characters in the argument.
// The return value is True.


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
var email = "helloworld@gmail.com"

"email".toUpperCase()
console.log(toUpperCase(helloworld@gmail.com));
// Here, using the toUpperCase method, everything written within the string will be written in upper case. The return value will be "HELLOWORLD@GMAIL.COM"
var mood = 'Happy! '

console.log('I feel ${mood.repeat(2)}');
// Here, using the .repeat method, everything in the declared variable will be repeated by how many times you specific.
// The return value would be I feel Happy! Happy!
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
////var firstName = "Jeff";
////console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
// The method takes the items in the array and reverses their order. The return would be: 3, 2, 1.

var ages = ["90", "50", "20"]
console.log(ages.copyWithin(0, 2));
// This method identies the items in the array that you identify within the argument of the method. The return will be 90, 20.