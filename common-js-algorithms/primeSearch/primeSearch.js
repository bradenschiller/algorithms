// function that takes in a value and returns true or false based on if the value is prime number or not

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(isPrime(4));

console.log(isPrime(3));

console.log(isPrime(7));

console.log(isPrime(10));

// answer returns
// false
// true
// true
// false



