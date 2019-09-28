function solve(array) {
    let result = [];

    for (let index = 0; index < array.length - 1; index += Number(array[array.length - 1])) {
        result.push(array[index])
    }

    return (result.join('\r\n'))



}


console.log(solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']))