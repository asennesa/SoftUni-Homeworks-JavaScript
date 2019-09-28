function solve(array){
let result = [];
for (let index = 0; index < array.length; index++) {
    if(array[index] == 'add'){
        result.push(index+1)  
    } else if(array[index] == 'remove'){
        result.pop()
    }
}
if(result.length >0){
return(result.join('\r\n'))
}else{
    return "Empty"
}
}

console.log(solve(['remove', 
'remove', 
'remove']
))