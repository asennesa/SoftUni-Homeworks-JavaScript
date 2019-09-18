function composeObject(arr) {
    let obj = {};
    for (let index = 0; index < arr.length; index += 2) {
        let element = arr[index];
        let value = arr[index + 1];
        obj[element] = Number(value);
    }
    console.log(obj);
}
composeObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])