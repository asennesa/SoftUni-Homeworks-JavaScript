function solve(arr) {
    let speed = arr[0];
    let area = arr[1];
    const mWayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    const over20 = 'speeding';
    const over40 = 'excessive speeding';
    const anythingElse = 'reckless driving';

    switch (area) {
        case 'city':
            let detector = speed - cityLimit;
            if (detector > 0 && detector <= 20) {
                console.log(over20);
            } else if (detector > 20 && detector <= 40) {
                console.log(over40);
            } else if (detector > 40) {
                console.log(anythingElse);

            }
            break;
        case 'residential':

            if (speed - residentialLimit > 0 && speed - residentialLimit <= 20) {
                console.log(over20);
            } else if (speed - residentialLimit > 20 && speed - residentialLimit <= 40) {
                console.log(over40);
            } else if (speed - residentialLimit > 40) {
                console.log(anythingElse);

            }
            break;
        case 'interstate':
            {
                let detector = speed - interstateLimit;
                if (detector > 0 && detector <= 20) {
                    console.log(over20);
                } else if (detector > 20 && detector <= 40) {
                    console.log(over40);
                } else if (detector > 40) {
                    console.log(anythingElse);

                }
            }
            break;
        case 'motorway':
            {
                let detector = speed - mWayLimit;
                if (detector > 0 && detector <= 20) {
                    console.log(over20);
                } else if (detector > 20 && detector <= 40) {
                    console.log(over40);
                } else if (detector > 40) {
                    console.log(anythingElse);

                }
            }
            break;


    }
}
solve([200, 'motorway']);

