function solve(array) {
    let result = array.slice(0, 1);
    for (let index = 1; index < array.length; index++) {
        if (array[index] >= result[result.length - 1]) {
            result.push(array[index])
        }

    }
    return result.join("\r\n")


}


console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));