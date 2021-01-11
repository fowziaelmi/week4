console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  console.log(name);
  return 'Hello ' + name;
}
// Remember to call the function to test
console.log('in hello name:', helloName('Adam'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
console.log('in add numbers' );
let answer= firstNumber + secondNumber;
return answer;
  // return firstNumber + secondNumber;
}
console.log ('Running addNumbers with 5 and 7', addNumbers(5,7));
console.log ('Running addNumbers with 2 and 6', addNumbers(2,6));
// 4. Function to multiply three numbers & return the result
function multiplyThree(numb1, numb2, numb3 ){
console.log ('in multiplyThree');
let answer= numb1 * numb2 * numb3
return answer;
}
console.log('Running multiplyThree with 5, 2 and 6', multiplyThree(5,2,6));
console.log('Running multiplyThree with 7, 1 and 3', multiplyThree(7,1,3));
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
}
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
const lastItem = array[array.length-1]
return lastItem;
}

console.log( 'the function should return 5', getLast([3,4,2,5]));
console.log( 'the function should return 6', getLast([1,9,7,6]));
console.log(' the function should return undefined', getLast([]));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ){
  for (let i=0; i < array.length; i++){
    const individualValue = array[i];
    console.log('individual value:', individualValue);

    if (individualValue === value ){
      return true;
    }
  }
  return false;
}
const listValues= [3,5,7,4,2,9];
console.log('the function should return true', find(3, listValues));
console.log ('the function should return false', find(listValues, 10));
console.log('the function should return true', find(2, listValues));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

    if (letter === string[0]){
      return true;


}
return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
  for( i=0; i<array.length; i++){
    sum= array[i] + sum
  }
  // TODO: loop to add items
  return sum;
}
const numbers = [2,8,8,6,4,2,3]

console.log('the sum of the numbers is:', sumAll(numbers));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it
