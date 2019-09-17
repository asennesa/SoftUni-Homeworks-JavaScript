function printRectangle(input = 5) {
    for (let index = 0; index < input; index++) {
        let currentRow = new Array(input);
        for (let index2 = 0; index2 < input; index2++) {
            currentRow.push('* ');
        }
        console.log(currentRow.join(""));
    }
}
