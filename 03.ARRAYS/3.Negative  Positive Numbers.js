function solve(array){
let result = [];
for (let index = 0; index < array.length; index++) {
    if(array[index]< 0){
    result.unshift(array[index])
}else{
    result.push(array[index])

}
}
result.forEach(e=>console.log(e))

}
solve([3, -2, 0, -1])