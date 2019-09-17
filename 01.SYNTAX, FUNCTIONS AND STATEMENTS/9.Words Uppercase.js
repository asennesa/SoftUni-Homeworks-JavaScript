function solve(input){
    return input
    .match(/\w+/gim)
    .map(x=>x.toUpperCase())
    .join(", ");

}
console.log(solve('Hi, how are you?'));
