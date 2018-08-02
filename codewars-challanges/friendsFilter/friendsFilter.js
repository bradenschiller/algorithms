//function takes in array of friends and filters them based on how many charcters are in thier name

function myFriends(friends) {
    return friends.filter(function(friend){return friend.length === 4});
}

console.log(myFriends(["Mark", "Braden", "Kelvin", "Bob", "James", "Mary"]));

//answer returns ["Mark", "Mary"]