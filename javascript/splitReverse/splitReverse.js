// a function that takes in a number reverses it and returns it as an array.

function reverseArray(num) {
    let digits = num.toString().split('').reverse();
    let newNumber = digits.map((number) => parseInt(number));
    return newNumber;
}

reverseArray(12345);

// answer returns [ 5, 4, 3, 2, 1]