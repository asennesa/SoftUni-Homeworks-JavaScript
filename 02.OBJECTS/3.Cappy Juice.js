function solve(data) {
    let juices = {};
    let bottles = {};
    data.forEach(element => {
        let [name, quantity] = element.split(' => ');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }
        juices[name] += quantity;
        let currentQuantity = juices[name];
        if (juices[name] >= 1000) {
            bottles[name] = Math.trunc(currentQuantity / 1000);
        }
    });
    for (const key in bottles) {
        console.log(key + " => " + bottles[key])
    }
}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

);