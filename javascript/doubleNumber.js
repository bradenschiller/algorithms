// coding challange that takes in an array and doubles each number in the array

let array = [1, 2, 3]

function doubleNumbers(arr) {
  let newarr = arr.map((number) => {
      return number * 2
  })
  console.log(newarr);
}

doubleNumbers(array);

// answer: newarr = [2, 4, 6]
