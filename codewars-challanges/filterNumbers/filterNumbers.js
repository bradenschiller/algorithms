//function that takes in a mixed array and only returns an array of integers

function filter_number(arr) {
   return arr.filter(item => typeof item == 'number');
}

console.log(filter_number([ 7, 'whats up', 27, 'who else' ]));

//answer returns [7, 27]