function solve(arr) {
    let rotations = arr.pop() % arr.length
    for (let index = 0; index < rotations; index++) {
        arr.unshift(arr.pop());

    }
    return arr.join(" ")


}

console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']

))