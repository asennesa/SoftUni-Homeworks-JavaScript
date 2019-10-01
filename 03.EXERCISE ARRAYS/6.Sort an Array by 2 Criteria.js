function solve(arr) {
    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    return sorted.join('\r\n')

}

console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));