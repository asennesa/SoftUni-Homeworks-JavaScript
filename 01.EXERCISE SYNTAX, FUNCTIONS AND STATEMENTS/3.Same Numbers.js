function solve(number) {
    let numToArray = String(number).split('');
    let flag = true;
    const firstNum = numToArray[0];
    for (const num of numToArray) {
        if (num != firstNum) {
            flag = false;
            break;
        }

    }
    let sum = numToArray.map(Number).reduce((x, y) => x + y);
    console.log(flag);
    console.log(sum);

}
solve(2222222);