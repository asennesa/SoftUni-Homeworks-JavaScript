function solve(data) {
    let catalogue = {};
    for (const line of data) {
        let [name, price] = line.split(" : ");
        price = Number(price);
        let initial = name[0];

        if (!catalogue.hasOwnProperty(initial)) {
            catalogue[initial] = {};
        }
        products = catalogue[initial];
        if (!catalogue[initial].hasOwnProperty(name)) {
            catalogue[initial][name] = price;
            //or
            ///products[name] = price;

        }


    }
    let sortedInitials = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (let initial of sortedInitials) {
        console.log(initial);
        products = catalogue[initial];
        let sortedProducts = Object.keys(products).sort((a, b) => a.localeCompare(b));

        for (const product of sortedProducts) {
            console.log(`  ${product}: ${products[product]}`);

        }
    }

}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);