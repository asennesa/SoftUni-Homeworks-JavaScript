function solve(array) {

    let sorted = new Set(array.sort((a, b) => a.length - b.length || a.localeCompare(b)));

    for (const name of sorted) {
        console.log(name);
    }

}

solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
)