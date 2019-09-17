function add(x, y) {
    return x + y;
}
function inverse (x, y){
   return x+1/y;
}
function concat (x, y){
    return String(x) + String(y);
} 

function solve(...params) {
    console.log(params.reduce(add, 0));
    let result = (params.reduce(inverse, 0));
    console.log(result.toFixed(4));
    console.log(params.reduce(concat,""));


}
solve(1, 2, 3);