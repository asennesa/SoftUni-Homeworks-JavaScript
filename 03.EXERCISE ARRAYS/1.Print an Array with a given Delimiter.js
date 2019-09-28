
function solve(array) {

    let copy = array.slice(0, array.length - 1);
    return (copy.join(array[array.length - 1]))
}

console.log(solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']
))