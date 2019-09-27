function solve(data){
    let result = data.sort((a,b)=>a-b);
    console.log(result.splice(0,2).join(" "));

}

solve([30, 15, 50, 5])