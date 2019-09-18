function solve(array) {
    let total = 0;
    let theArray = array;
    while (theArray.length > 0) {
        let currentIndex = theArray.shift();
        let currentOrder = currentIndex.split(", ");
        let coinsInserted = currentOrder[0];
        let price = 0;
        if (currentOrder.includes('coffee') && currentOrder.includes('caffeine')) {
            price += 0.8;
            if (currentOrder.includes('milk')) {
                price += Math.round((0.8 * 0.1) * 10) / 10
            }
            if (currentOrder[currentOrder.length - 1] != 0) {
                price += Math.round((0.8 * 0.1) * 10) / 10
            }
        } else if (currentOrder.includes('coffee') && currentOrder.includes('decaf')) {
            price += 0.9;
            if (currentOrder.includes('milk')) {
                price += Math.round((0.9 * 0.1) * 10) / 10
            }
            if (currentOrder[currentOrder.length - 1] != 0) {
                price += Math.round((0.9 * 0.1) * 10) / 10
            }
        } else if (currentOrder.includes('tea')) {
            price += 0.8;
            if (currentOrder.includes('milk')) {
                price += Math.round((0.8 * 0.1) * 10) / 10
            }
            if (currentOrder[currentOrder.length - 1] != 0) {
                price += Math.round((0.8 * 0.1) * 10) / 10
            }
        }
        let change = coinsInserted - price;
        if (change >= 0) {
            console.log(`You ordered ${currentOrder[1]}. Price: $${price.toFixed(2)} Change: $${Math.abs(change).toFixed(2)}`);
            total += price;
        } else {
            console.log(`Not enough money for ${currentOrder[1]}. Need $${Math.abs(change).toFixed(2)} more.`);
        }



    }
    console.log(`Income Report: $${total.toFixed(2)}`)
}
solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
//solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);