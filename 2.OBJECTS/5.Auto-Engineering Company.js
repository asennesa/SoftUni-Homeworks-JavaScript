function solve(array) {
    let register = {};
    for (const line of array) {
        let [brand, model, quantity] = line.split(" | ");
        quantity = Number(quantity);

        if (!register.hasOwnProperty(brand)) {
            register[brand] = {};
        }
        models = register[brand];
        if (!models.hasOwnProperty(model)) {
            register[brand][model] = quantity;
        } else {
            register[brand][model] = register[brand][model] + quantity;
        }

    }
    for (const brand of Object.keys(register)) {
        console.log(brand);
        for (const [key, value] of Object.entries(register[brand])) {
            console.log(`###${key} -> ${value}`);
        }
    }


}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)