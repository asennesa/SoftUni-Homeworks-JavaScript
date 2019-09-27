function solve(data){
    let result=[];
for (let index = 0; index < data.length; index+=2) {
     result.push(data[index])
   
}
console.log(result.join(" "))
}

solve(['5', '10'])