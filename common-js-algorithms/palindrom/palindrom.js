// function that takes in a string and responds to if that sting matched its on value backwords

function palindrom(str) {
    if (str === str.split('').reverse().join('')) {
        return `${str} is the same as ${str.split('').reverse().join('')}`;
    } else {
        return `${str} is not the same as ${str.split('').reverse().join('')}`;
    }
}

console.log(palindrom('racecar'));

console.log(palindrom('movie'));

// answer returns 
// racecar is the same as racecar
// movie is not the same as eivom