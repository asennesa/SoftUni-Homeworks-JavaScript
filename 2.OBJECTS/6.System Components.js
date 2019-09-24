function solve(input) {
    let systems = {};
    for (const line of input) {
        let [sysName, compName, subCompName] = line.split(" | ");

        if (!systems.hasOwnProperty(sysName)) {
            systems[sysName] = {};
        }
        if (!systems[sysName].hasOwnProperty(compName)) {
            systems[sysName][compName] = [];
            systems[sysName][compName].push(subCompName);
        } else {
            systems[sysName][compName].push(subCompName);
        }
    }

    let sortedSystems = Object.keys(systems).sort((a, b) => Object.keys(systems[b]).length - Object.keys(systems[a]).length || a.localeCompare(b));

    for (const system of sortedSystems) {
        console.log(system);
        let sortedComponents = Object.keys(systems[system]).sort((a, b) => Object.keys(systems[system][b]).length - Object.keys(systems[system][a]).length);
        for (const comp of sortedComponents) {
            console.log("|||" + comp);
            for (const index of systems[system][comp]) {
                console.log("||||||" + index);
            }
        }

    }





}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
)