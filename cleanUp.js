// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName(name) {
  return '"Hello, what is your name?"';
}
console.log(askForName);

// This function is missing parameters, First in askForName you have to define the name of the person
// that you are asking, which I defined as "name". Then the function was missing is return. Then I had to close the extra spaces between a few
// brackets. I also corrected the lines in which the code was written, to clean it up.

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// This one was missing the console.log before the two bottom outputs, just having "addThreeNums" alone
// will not run the function. I also moved the bottom bracket further for cleanliness.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// On line 33 corrected the first part and made it function not "func" and added a space between the () and {. 
// Also changed on line 38 and moved that closing bracket to line 39.

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
    var avg = sum / 2;
return avg
}
console.log(average(10, 5));

// I moved the functions opening bracket onto the same line at the functions beginning. I deleted the
// empty line before the return of the function. I added the console.log to give this function an output.
// I added in 10 and 5 in order to run the function and test that it properly takes the average of two numbers.