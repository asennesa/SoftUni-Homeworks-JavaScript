function solve(arr) {
    let number = Number(arr.shift());
    let obj = {
        chop: function chop(x) { return x / 2; },
        dice: function dice(x) { return Math.sqrt(x) },
        spice: x => { return x + 1 },
        bake: x => { return x * 3 },
        fillet: x => { return (x * 0.8).toFixed(1) }
    };
    for (let index = 0; index < arr.length; index++) {
        number = obj[arr[index]](number);
        console.log(number);

    }

}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);