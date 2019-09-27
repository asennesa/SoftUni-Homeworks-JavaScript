function solve(array){
    let result=[];
    for (let index = 0; index < array.length; index++) {
        if(index%2 == 1){
            result.push(array[index])
        }   
    }
    let end = result.map(e=>e*2).reverse();

    console.log(end.join(" "))


}

solve([10, 15, 20, 25]);