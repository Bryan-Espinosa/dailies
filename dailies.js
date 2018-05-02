// Are the numbers in order?

// In this Kata, your function receives an array of positive integers as input. Your task is to determine whether the numbers are in ascending order.

// For the purposes of this Kata, you may assume that all inputs are valid (i.e. arrays containing only positive integers with a length of at least 2).

// For example:

var inAscOrder = [1,2,4,7,19]; // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

// Extra Challenge: If time, try to optimise and shorten your code as much as possible.
function trueOrFalse(inAscOrder){
  for(i=0;i<inAscOrder.length;i++)
 if(inAscOrder[i]<inAscOrder[i+1]){
   return true;
 } else return false;
}






// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

function fillArray(){
  var count = 0;
var arr = [];
  for(i=0;i<100;i++){
    if(arr[i]=== ""){
      arr.push(count++);
    }
  } console.log(arr);
  
}