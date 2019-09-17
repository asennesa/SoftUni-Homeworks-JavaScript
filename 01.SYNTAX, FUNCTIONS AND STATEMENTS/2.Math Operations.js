function mathOps(x, y, operator) {
    if (typeof operator === 'string') {
        var result = eval(`${x}${operator}${y}`);
        console.log(result);

    }

}
