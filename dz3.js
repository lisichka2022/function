'use strict'
const arr = [1, 2, 3, -1, -2, -3];

function positiveNumber(arr){
    let array=[]
    
    if (arr.length === 0) {
        return null;}
        else{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>0){
        array.push(arr[i])
        }
    }      
}return array
};
console.log(positiveNumber(arr));