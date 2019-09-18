function solve(fruit, weight, money) {
    const weightConvert = weight / 1000;
    const moneyNeeded = weightConvert * money;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightConvert.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
