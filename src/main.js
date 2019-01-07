// Write a for loop that will print only even numbers from an array:
// For example: question0([ 5, 20, 11, 42, 2, 19 ]) >> [ 20, 42, 2 ]

function question0 (array) {
    for(var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
     }
    }
  }
  // question0([5, 20, 11, 42, 2, 19]);

// Write a for loop that doubles each number in the following array. If the
// resulting number is greater than 12, print it to the console:
// For example: [ 2, 4, 8, 16 ] would print the numbers 16 and 32

function question1 (array) {
  // var arr = ([5, 20, 11, 42, 2, 19]);
  // var newArr = [];
  for(var i = 0; i < array.length; i++) {
    array[i] = array[i] * 2
    if (array[i] > 12) {
      console.log(array[i]);
     }   
    }
    // return newArr;
}
// question1([5, 20, 11, 42, 2, 19]);
// Write a for loop to iterate over every element in the following array:
// [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
//
// Using a switch statement, do the following:
// - If the day is on a weekend, print "Yay, it's the weekend!"
// - If the day is Friday, print "Almost there..."
// - If the day is Monday, print "I hate Mondays more than Garfield."
// - Otherwise, print "Everybody's working for the weekend."
  // Write your code here! Make sure not to modify the function
  // declaration above or the `module.exports` code below
  function question2 (array) {
  for (var i = 0; i < array.length; i++) {
  switch (array[i]) {
    case 'Mon':
    console.log("I hate Mondays more than Garfield.");
    break;
    case 'Tues':
    console.log("Everybody's working for the weekend.");
    break;
    case 'Wed':
    console.log("Everybody's working for the weekend.");
    break;
    case 'Thurs':
    console.log("Everybody's working for the weekend.");
    break;
    case 'Fri':
    console.log("Almost there...");
    break;
    case 'Sat':
    console.log("Yay, it's the weekend!");
    break;
    case 'Sun':
    console.log("Yay, it's the weekend!");
    break;
  }
}
}
// question2(['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'])


module.exports = { question0, question1, question2 }
