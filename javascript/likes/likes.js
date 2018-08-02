//function that takes in diffrent array lengths and returns a certain text depending on content number inside of the array. 

function likes(names) {
    switch (names.length) {
        case 0: return `No one likes this`;
        break;
        case 1: return `${names[0]} likes this`;
        break;
        case 2: return `${names[0]} and ${names[1]} like this`;
        break;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        break;
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
        break;
    }
}

likes([]);
likes(['peter']);
likes(['peter', 'mark']);
likes(['peter', 'mark', 'braden']);
likes(['peter', 'mark', 'braden', 'bruno']);

// answer returns:
// No one likes this
// peter likes this
// peter, mark and braden like this
// peter, mark and {number} others like this