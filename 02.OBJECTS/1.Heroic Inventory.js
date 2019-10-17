function solve(array) {
    let heroes = [];
    for (const index of array) {
        let [name, level, items] = index.split(" / ");
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroes.push({ name, level, items })

    }
    console.log(JSON.stringify(heroes))
}